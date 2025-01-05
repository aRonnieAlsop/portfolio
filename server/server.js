const express = require('express');
const cors = require('cors');
const db = require('./db/init_db'); // Imported database connection

const app = express();
app.use(cors());
app.use(express.json());

// API route to fetch all blog posts
app.get('/api/blogs', (req, res) => {
  const query = 'SELECT * FROM blog_posts';
  db.all(query, [], (err, rows) => {
    if (err) {
      console.error('Error fetching blog posts:', err.message);
      res.status(500).send('Error fetching blog posts');
    } else {
      res.json(rows);
    }
  });
});

// API route to fetch a single blog post by ID
app.get('/api/blogs/:id', (req, res) => {
  const { id } = req.params;
  const query = 'SELECT * FROM blog_posts WHERE id = ?';
  db.get(query, [id], (err, row) => {
    if (err) {
      console.error('Error fetching the blog post:', err.message);
      res.status(500).send('Error fetching the blog post');
    } else if (!row) {
      res.status(404).send('Blog post not found');
    } else {
      res.json(row);
    }
  });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
