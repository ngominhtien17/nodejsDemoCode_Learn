const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Course = new Schema({
    name: {type: String},
    description: {type: String, maxLenght: 600 },
    img: {type: String},
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now},
})

module.exports = mongoose.model('Course', Course)