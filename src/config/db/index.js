const mongoose = require('mongoose')

async function connect(){
    try{
        await mongoose.connect('mongodb://localhost:27017/learn_nodejs');
        console.log('MongoDB Connected');
    } catch(err){
        console.log('DB Connect fail!!!!')
    }
}

module.exports = {connect}