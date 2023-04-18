const mongoose = require('mongoose');

const playerSchema = mongoose.Schema({

    "name" : {type: String, required: true},
    "nationality": {type: String, required: true},
    "team": {type: String, required: true},
    "rating": {type: Number, required: true}
})

module.exports = mongoose.model("Player", playerSchema)