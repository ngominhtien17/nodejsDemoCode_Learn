const path = require('path')
const morgan = require('morgan')
const express = require('express')
const exphbs = require('express-handlebars');
const app = express()
const methodOverride = require('method-override')
const port = 3000

const route = require('./routes')
const db = require('./config/db')

app.use(methodOverride('_method'))
// Connect to DB
db.connect();

app.use(morgan('combined'))

app.use(express.static(path.join(__dirname, 'public')))

app.use(express.urlencoded({
  extended: true
}))

app.use(express.json())

app.engine('hbs', exphbs.engine({
  extname: '.hbs',
  helpers: {
    sum: (a, b) => a + b
  }
}
));
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'resources', 'views'))

// Route init
route(app)

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})