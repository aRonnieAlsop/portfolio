const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();

// Route to fetch all projects (list the folders in the /projects directory)
router.get('/projects', (req, res) => {
  const projectsDir = path.join(__dirname, '../projects'); // Path to projects directory
  
  // Read the contents of the "projects" directory
  fs.readdir(projectsDir, (err, files) => {
    if (err) {
      console.error('Error reading projects directory:', err.message);
      return res.status(500).send('Error reading projects directory');
    }

    // Filter only directories (projects) and return them as the project list
    const projects = files.filter(file => fs.statSync(path.join(projectsDir, file)).isDirectory());
    
    // Map the folder name to the project id
    const projectDetails = projects.map(projectId => ({
      id: projectId, // Folder name is used as the project id
      name: projectId.replace(/_/g, '').toUpperCase(), // formatted project name
      description: `Description for {projectId}`, // description to be developed?
    }));

    res.json(projectDetails); // send the the list of projects
  });
});


module.exports = router;

