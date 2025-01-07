const express = require('express');
const db = require('../db/init_db');
const router = express.Router();

// API route to fetch all projects
router.get('./projects', (req, res) => {
    const query = 'SELECT * FROM projects';
    db.all(query, [], (err, rows) => {
        if (err) {
            console.error('Error fetching projects:', err.message);
            res.status(500).send('Error fetching projects');
        } else {
            res.json(rows);
        }
    });
});

// API route to fetch files for a specific project
router.get('/projects/:id/files', (req, res) => {
    const projectId = req.params.id;
    const query = 'SELECT * FROM files WHERE project_id =?';
    db.all(query, [projectId], (err, rows) => {
        if (err) {
            console.error('Error fetching files:', err.message);
            res.status(500).send('Error fetching files');
        } else {
            res.json(rows);
        }
    });
});

module.exports = router;