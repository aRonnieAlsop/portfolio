const express = require('express');
const db = require('../db/init_db');
const { validateId } = require('../middleware');  // Import middleware for validating IDs
const router = express.Router();

// API route to fetch all blog posts
router.get('/blogs', (req, res) => { 
    const query = 'SELECT * FROM blog_posts';
    db.all(query, [], (err, rows) => {
        if (err) {
            console.error('Error fetching blog posts:', err.message);
            res.status(500).send('Error fetching blog posts');
        } else {
            res.json(rows); // Send the list of blog posts
        }
    });
});

// API route to fetch a single blog post by ID
router.get('/blogs/:id', validateId, (req, res) => {  
    const { id } = req.params;
    const query = 'SELECT * FROM blog_posts WHERE id = ?';
    db.get(query, [id], (err, row) => {
        if (err) {
            console.error('Error fetching the blog post:', err.message);
            res.status(500).send('Error fetching the blog post');
        } else if (!row) {
            res.status(404).send('Blog post not found');
        } else {
            res.json(row); // Send the blog post
        }
    });
});

module.exports = router;  // Export the router instance
