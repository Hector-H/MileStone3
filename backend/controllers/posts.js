const express = require('express')
const router = express.Router()
const Post = require('../models/post')


router.post('/create', async (req, res) => {
    const body = req.body;

    try {
        const newPost = {
        userId: body.userId,
        content: body.content,
        createdAt: new Date().toISOString(),
        }

        const createdPost = await Post.createPost(newPost);

        return res.status(201).json(createdPost);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
})

// Get a post by ID
router.get('/:id', async (req, res) => {
    const postId = req.params.id

    try {
        // Retrieve the post from the database using the Post model
        const post = await Post.findPostById(postId);

        if (!post) {
        return res.status(404).json({ error: 'Post not found' })
        }

        return res.json(post);
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
})
module.exports = router
