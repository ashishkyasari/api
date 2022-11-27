const mongoose = require('mongoose')

const dataSchema = new mongoose.Schema({
    badWords:{
        type:Array
    }
});

const data = mongoose.model('data',dataSchema);
module.exports = {data};