const path = require('path')
const morgan = require('morgan')
const express = require('express')
const exphbs = require('express-handlebars');
const app = express()
const port = 3000

app.use(morgan('combined'))

app.engine('hbs', exphbs.engine({
  extname: '.hbs'}
));
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'resources', 'views'))

app.get('/', (req, res) => {
  res.render('home')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})