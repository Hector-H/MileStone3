const usersRouter = require('express').Router()

usersRouter.post('/signup', (req, res) => {
    res.send('POST /signup page')
})

usersRouter.post('login', (req, res) => {
    res.send('POST /login page')
})

usersRouter.get('/', (req, res) => {
    res.send('GET /users')
})

usersRouter.put('/:id/save-pin', (req, res) => {
    res.send('PUT /save-pin')
})

usersRouter.put('/:id/delete-pin', (req, res) => {
    res.send('PUT /delete-pin')
})

module.exports = usersRouter