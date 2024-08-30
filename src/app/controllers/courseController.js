const Course = require('../models/Course')
const { mongooseToObject } = require('../../util/mongoose')

const home = async (req, res,next) => {
    Course.find({})
        .then(courses => {
            res.render('home', { 
                courses: mongooseToObject(courses) 
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