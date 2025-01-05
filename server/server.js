const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());

// Connects to SQLite database
const dbPath = path.resolve(__dirname, 'db', 'blog.db');
const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error('Error connecting to database:', err.message);
  } else {
    console.log('Connected to the SQLite database.');
  }
});

app.get('/', (req, res) => {
  res.send('Hello from the backend!');
});


// API routes for fetching blog posts
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

app.get('/api/blogs/:id', (req, res) => {
  const { id } = req.params;
  const query = 'SELECT * FROM blogs WHERE id = ?';

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


// Starts the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
