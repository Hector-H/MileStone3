// middleware/authenticate.js
const jwt = require('jsonwebtoken')
const { User } = require('../models/user')

const authenticate = async (req, res, next) => {
    const token = req.header('Authorization')

    if (!token) {
        return res.status(401).json({ error: 'Unauthorized: No token provided' })
    }

    try {
        const decoded = jwt.verify(token.replace('Bearer ', ''), process.env.JWT_SECRET)
        const user = await User.findUserById(decoded.id)

        if (!user) {
            return res.status(401).json({ error: 'Unauthorized: Invalid token' })
        }

        req.user = user;
        next();
    } catch (error) {
        return res.status(401).json({ error: 'Unauthorized: Invalid token' })
    }
};

module.exports = authenticate