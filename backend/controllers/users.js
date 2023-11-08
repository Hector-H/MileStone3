const usersRouter = require('express').Router()

usersRouter.get('/', (req, res) => {
    res.send('GET /users')
})

module.exports = usersRouter