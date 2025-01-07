const express = require('express');
const db = require('../db/init_db');
const router = express.Router();

// API route to fetch all projects
router.get('/projects', (req, res) => {
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
    const query = 'SELECT * FROM files WHERE project_id = ?';
    db.all(query, [projectId], (err, rows) => {
        if (err) {
            console.error('Error fetching files:', err.message);
            res.status(500).send('Error fetching files');
        } else {
            res.json(rows);
        }
    });
});

// Backend route to get project details
router.get('/projects/:id', (req, res) => {
    const projectId = req.params.id;
    db.get('SELECT * FROM projects WHERE id = ?', [projectId], (err, row) => {
        if (err) {
            return res.status(500).send('Error fetching project');
        }
        if (!row) {
            return res.status(404).send('Project not found');
        }

        // Fetch the files related to the project
        db.all('SELECT * FROM files WHERE project_id = ?', [projectId], (err, files) => {
            if (err) {
                return res.status(500).send('Error fetching project files');
            }
            row.files = files;  // Attach files to the project object
            res.json(row);  // Send the project along with its files
        });
    });
});

module.exports = router;
