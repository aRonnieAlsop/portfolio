const sqlite3 = require('sqlite3').verbose();
const path = require('path');

// Path to SQLite database
const dbPath = path.join(__dirname, 'blog.db');

// Connects to SQLite database
const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error('Error opening database:', err.message);
  } else {
    console.log('Connected to the SQLite database.');
  }
});

db.all('SELECT * FROM blog_posts;', [], (err, rows) => {
    if (err) {
        throw err;
    } 
    console.log(rows);
});

// Route to get all blog posts
app.get('/api/blog-posts', (req, res) => {
    db.all('SELECT * FROM blog_posts', [], (err, rows) => {
      if (err) {
        res.status(500).json({ error: err.message });
      } else {
        res.json(rows);
      }
    });
  });


// Closes the database connection
db.close((err) => {
    if (err) {
      console.error('Error closing database:', err.message);
    } else {
      console.log('Database connection closed.');
    }
  });
