const Course = require('../models/Course')
const { multipleMongooseToObject } = require('../../util/mongoose')

const storedCourses = (req, res, next) => {
    Course.find({})
        .then(courses => {
            res.render('me/stored-courses', { courses: multipleMongooseToObject(courses) })
        })
        .catch(next)
}

module.exports = {
    storedCourses,
}

