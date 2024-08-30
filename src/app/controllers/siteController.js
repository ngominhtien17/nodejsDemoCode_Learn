const Course = require('../models/Course')
const { multipleMongooseToObject } = require('../../util/mongoose')

const home = async (req, res,next) => {
    Course.find({})
        .then(courses => {
            res.render('home', { 
                courses: multipleMongooseToObject(courses) 
            })
        })
        .catch(next);
};

const search = (req,res) =>{
    res.render('search')
}

module.exports = {
    home,
    search,
}