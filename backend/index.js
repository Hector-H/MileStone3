// Modules and Globals
require('dotenv').config()
const express = require('express')

const app = express()

// Controllers & Routes
app.use('/users', require('./controllers/users'))
app.use('/posts', require('./controllers/posts'))
app.use('/pins', require('./controllers/pins'))

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('*', (req, res) => {
    res.status(404).send('<h1>404 Page</h1>')
})
  
  app.listen(process.env.PORT);