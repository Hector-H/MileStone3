const express = require('express');
const router = express.Router();
const Pin = require('../models/pin');

// Example route to create a new pin
router.post('/create', async (req, res) => {
    const body = req.body;

    try {
        // Create a new pin
        const newPin = {
            id: 'some-unique-id', // generate a unique ID
            userId: body.userId, // get the user ID from the request or wherever it comes from
            photoUrl: body.photoUrl,
            description: body.description,
            createdAt: new Date().toISOString(), // set the current timestamp
        };

        // Save the pin to the database (you need to implement this)
        // ...

        return res.status(201).json(newPin);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

module.exports = router;
