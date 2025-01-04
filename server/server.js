const express = require('express');
const cors = require('cors');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const app = express();
const PORT = 5000;

// Enables CORS for frontend
app.use(cors());

// body parser for JSON
app.use(express.json());

// Initializes SQLite database
const db = new sqlite3.Database('./db/blog.db', (err) => {
    if (err) {
        console.error('Error opening database:', err);
    } else {
        console.log('Connected to SQLite database');
    }
});

// defines an API route to fetch blog posts
app.get('/api/blog', (req, res) => {
    db.all('SELECT * FROM posts', [], (err, rows) => {
      if (err) {
        console.error('Error fetching data from SQLite:', err);
        return res.status(500).send('Internal server error');
      }
      res.json(rows);
    });
  });

// serves React app in production
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '..', 'client', 'build')));
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '..', 'client', 'build', 'index.html'));
    });
}

//starts server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});