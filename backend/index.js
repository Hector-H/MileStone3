// Modules and Globals
require('dotenv').config()
const express = require('express')
const usersRouter = require('./controllers/users')

const app = express()

// Controllers & Routes
app.use('/users', usersRouter)

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('*', (req, res) => {
    res.status(404).send('<h1>404 Page</h1>')
})
  
  app.listen(process.env.PORT);