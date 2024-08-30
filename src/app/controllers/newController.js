// [GET] /news
const index = (req,res) => {
    res.render('news')
}
const show = (req,res) => {
    res.send('NEWS DETAILS')
}
module.exports = {
    index,
    show,
}