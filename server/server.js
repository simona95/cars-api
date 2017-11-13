require('./config/config');
require('./db/mongoose');

const _ = require('lodash');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const logger = require('morgan');
const path = require('path');


var {User} = require('./models/user');
var {Car} = require('./models/car');
var {authenticate} = require('./middleware/authenticate');

var app = express();
const port = process.env.PORT;

app.use('/public', express.static(path.join(__dirname,'../public')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger('dev'));
app.use(cors());

require('./db/generateCars');

// -----------------------------------   USERS   ---------------------------------------
app.post('/api/users', (req, res) => {
  var body = _.pick(req.body, ['name', 'surname', 'email', 'password']);
  var user = new User(body);
  user.save().then(() => {
    return user.generateAuthToken();
  }).then((token) => {
    res.send(Object.assign( _.pick(user, ['_id', 'name', 'surname', 'email']),{token}));
  }).catch((e) => {
    res.status(400).send(e);
  })
});

app.get('/api/users/me', authenticate, (req, res) => {
  res.send( _.pick(req.user, ['_id', 'name', 'surname', 'email']));
});

app.post('/api/users/login', (req, res) => {
  var body = _.pick(req.body, ['email', 'password']);
  User.findByCredentials(body.email, body.password).then((user) => {
    return user.generateAuthToken().then((token) => {
      console.log(user);
      res.send(Object.assign( _.pick(user, ['_id', 'name', 'surname', 'email']),{token}));
    });
  }).catch((e) => {
    res.status(400).send(e);
  });
});

app.delete('/api/users/me/token', authenticate, (req, res) => {
  req.user.removeToken(req.token).then(() => {
    console.log("Token Deleted");
    res.status(200).send();
  }, () => {
    console.log("TError deleting token");
    res.status(400).send();
  });
});

app.get('/api/cars', (req, res)=>{
  var cars =[];
  Car.find({},(err, docs)=>{
    if(err)
      res.status(400).send(err);
    docs.forEach((element)=>{
      cars.push(_.pick(element, ['_id', 'name', 'brand', 'hp', 'image','cost_per_day']));
    });
    res.send(cars);
  })
});

app.post('/api/cars/reserve/:id', authenticate, (req, res)=>{
  var carId = req.params.id;
  Car.findOne({_id: carId,
     reserved: {
       $not: {
         $elemMatch: {from: {$lte: req.body.to.substring(0,10)}, to: {$gte: req.body.from.substring(0,10)}}
       }
     }})
    .then((doc)=>{
     if(!doc)
       res.status(400).send({error:"Error has occurred"});
    doc.reserved.push({user: req.user._id, from: req.body.from, to: req.body.to});
    doc.save((err, doc)=>{
      if(err)
        res.status(400).send(err);
      res.send(doc);
    });
  });
});

app.get('/api/cars/reserve',authenticate, (req, res)=>{
  Car.find({
    reserved:{$elemMatch:{user:req.user._id}}
  }).then((docs)=>{
    if(!docs)
      res.send({message:"You have no reservations"});
    var result =[];
    docs.forEach((element)=>{
      element.reserved.forEach((subelement)=>{
        if(subelement.user.toHexString == req.user._id.toHexString){
          result.push({name: element.name, image:element.image, from:subelement.from, to:subelement.to});
        }
      })
    });
    res.send(result);
  })
});

app.post('/api/cars/reserve', authenticate, (req, res)=>{
  Car.find({
    brand: req.body.carType,
    cost_per_day: {$gte: req.body.priceRange.lower, $lte: req.body.priceRange.upper},
    reserved: {
      $not: {
        $elemMatch: {from: {$lte: req.body.to.substring(0,10)}, to: {$gte: req.body.from.substring(0,10)}}
      }
    }})
      .then((docs)=>{
        if(!docs)
          res.status(400).send({error:"No cars found matching the criteria"});
        res.send(docs);
      });
});

app.listen(port, () => {
  console.log(`Started up at port ${port}`);
});

