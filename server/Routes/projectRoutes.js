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

// Route to fetch files for a specific project
router.get('/projects/:id', (req, res) => {
  const projectId = req.params.id;
  const projectDir = path.join(__dirname, '../projects', projectId);  // Path to the specific project folder

  console.log('Fetching project for:', projectId); // Log the project id

  // Check if the project directory exists
  fs.readdir(projectDir, (err, files) => {
    if (err) {
      console.error('Error reading project directory:', err.message);
      return res.status(500).send('Error reading project directory');
    }

    console.log('Files in project:', files); // Log the files in the project directory

    // Just return the first file (for testing purposes)
    const firstFile = files[0];  
    const filePath = path.join(projectDir, firstFile);  // Full path to the file

    // Send the file path and content (for testing, just send the first file)
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        console.error('Error reading file:', err.message);
        return res.status(500).send('Error reading the project file');
      }

      res.json({
        file_name: firstFile,
        file_content: data  // Send the content of the file
      });
    });
  });
});



module.exports = router;

