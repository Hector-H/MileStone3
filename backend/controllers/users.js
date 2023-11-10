const router = require('express').Router()
const User = require('../models/user')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { default: supabase } = require('../../pinthis/src/config/supabaseClient');

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
router.post('/login', async (req, res) => {
    const body = req.body

    try {
        const { data: user, error: userError } = await supabase
            .from('users')
            .select('*')
            .eq('username', body.username)
            
        if (userError) {
            throw new Error ('Database error has occurred')
        }

        const isPasswordCorrect = !user || !user.length
            ? false
            : await bcrypt.compare(body.password, user[0].passwordHash)

        if (!user || !isPasswordCorrect) {
            return res.status(401).json({ error: 'Invalid username or password!' })
        }

        const payload = {
            id: user[0].id,
            username: user[0].username,
            name: user[0].name
        }

        const token = jwt.sign (payload, process.env.JWT_SECRET, { expiresIn: '1h' })

        return res.status(200).json({ token: `Bearer ${ token }` })
    } catch (exception) {
        return res.status(500).json({ error: exception.message })
    }
})

// Get user by ID route
router.get('/id', async (req, res) => {
    try {
        const { data: user, error: userError } = await supabase
            .from('users')
            .select('*')
            .eq('id', req.params.id);
    
        if (userError) {
            throw new Error('A database error has occurred');
        }
    
        return res.json(user[0]);
    } catch (exception) {
        return res.status(500).json({ error: exception.message });
    }
})

// Post pin route
router.put('/:id/post-pin', async (req, res) => {
    try {
        const body = req.body;
    
        if (!body || !body.data) {
            return res.status(400).json({ error: 'Data is required' });
        }
    
        const { data: user, error: userError } = await supabase
            .from('users')
            .select('*')
            .eq('id', req.params.id);
        
        if (userError) {
            throw new Error('Database error has occurred');
        }
    
        if (!user || user.length === 0) {
            return res.status(404).json({ error: 'User not found' });
        }
    
        const updatedUser = await supabase
            .from('users')
            .update({
                postData: supabase.sql`array_append(postData, ${body.data})`,
            })
            .eq('id', req.params.id);
    
        return res.json(updatedUser[0]);
    } catch (exception) {
        return res.status(500).json({ error: exception.message });
    }
})

// Save pin route
router.put('/:id/save-pin', async (req, res) => {
    try {
        const { data: user, error: userError } = await supabase
          .from('users')
          .update({
            savedPins: supabase.sql`array_append(savedPins, ${req.body.photoUrl})`,
          })
          .eq('id', req.params.id);
    
        if (userError) {
          throw new Error('A database error has occurred');
        }
    
        return res.json(user[0]);
    } catch (exception) {
        return res.status(500).json({ error: exception.message });
    }
})

// Delete pin route
router.put('/:id/delete-pin', (req, res) => {
    res.send('PUT /delete-pin')
})

module.exports = usersRouter