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

//middleware to check if ID is an integer
const validateId = (req, res, next) => {
  const { id } = req.params;
  if (!/^\d+$/.test(id)) {
    return res.status(400).send('Invalid ID format. ID must be a positive integer.');
  }
  next();
};


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
      // Read the content file specified in content_file_path
      const filePath = path.join(__dirname, 'public', row.content_file_path);

      fs.readFile(filePath, 'utf-8', (err, content) => {
        if (err) {
          console.error('Error reading file:', err);
          res.status(500).send('Error reading content file');
        } else {
          // Return the blog post data along with the content
          res.json({ ...row, content });
        }
      });
    }
  });
});



// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
