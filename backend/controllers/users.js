const router = require('express').Router()
const User = require('../models/user')
const bcrypt = require('bcrypt');

// Signup Route
router.post('/signup', async (req, res) => {
    const body = req.body;
  
    try {
        // checking for exisiting users
        const { data: existingUser, error: existingUserError } = await supabase
            .from('users')
            .select('id')
            .eq('username', body.username);
    
        if (existingUserError) {
            throw new Error('A database error has occurred');
        }
    
        if (existingUser && existingUser.length > 0) {
            return res.status(400).json({ error: 'The username has already been taken' });
        }
    
        // salt and hash password
        const saltRounds = 10;
        const passwordHash = await bcrypt.hash(body.password, saltRounds);
    
        // create or update user info
        const { data: newUser, error: saveError } = await supabase
            .from('users')
            .upsert([
            {
                username: body.username,
                name: body.name,
                passwordHash: passwordHash,
            },
            ]);
    
        if (saveError) {
            throw new Error('A database error has occurred');
        }
    
        return res.json(newUser);
    } catch (exception) {
        return res.status(500).json({ error: exception.message });
    }
});

// Login Route
router.post('/login', (req, res) => {
    res.send('POST /login page')
})

// Get user by ID route with authentication
router.get('/id', (req, res) => {
    res.send('GET /users')
})

// Post pin route with authentication
router.put('/:id/post-pin', (req, res) => {
    res.send('PUT /post-pin')
})

// Delete pin route with authentication
router.put('/:id/delete-pin', (req, res) => {
    res.send('PUT /delete-pin')
})

module.exports = usersRouter