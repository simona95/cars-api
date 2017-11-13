var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect(process.env.MONGODB_URI);

mongoose.connection.on('open', ()=>{
    console.log("Connecting to mongo... (successful)");
});
mongoose.connection.on('error', ()=>{
    console.log("Connecting to mongo... (error)");
});

