var mongoose = require('mongoose');

var Car = mongoose.model('Car', {
    name: String,
    brand: String,
    hp: Number,
    image: String,
    cost_per_day: Number,
    reserved: [
        {
            user: mongoose.Schema.Types.ObjectId,
            from: String,
            to: String
        }
    ]
});

module.exports = {Car};

