const Course = require('../models/Course')
const { mongooseToObject } = require('../../util/mongoose')


// [GET] /courses/:slug 
const show = async (req, res,next) => {
    Course.findOne({slug: req.params.slug})
        .then(courses => {
            res.render('courses/show', {courses: mongooseToObject(courses)})
        })
        .catch(next);
};

// [GET] /courses/create
const create = async (req, res,next) => {
    res.render('courses/create')
}

// [POST] /courses/store
const store = (req, res, next) => {
    req.body.image = `https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`
    const course = new Course(req.body)
    course.save()
        .then(() => res.redirect('/'))
        .catch(next)
    
}

// [GET] /courses/:id/edit
const edit = (req, res, next) => {
    Course.findById(req.params.id)
        .then(course => res.render('courses/edit', {course: mongooseToObject(course)}))
        .catch(next)
}

// [PUT] /courses/:id
const update = (req, res, next) => {
    Course.updateOne({_id: req.params.id}, req.body)
        .then(() => res.redirect('/me/stored/courses'))
        .catch(next)
}

module.exports = {
    show,
    create,
    store,
    edit,
    update,
}