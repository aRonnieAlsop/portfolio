const express = require('express');
const cors = require('cors');
const db = require('./db/init_db'); // Imported database connection
const projectRoutes = require('./Routes/projectRoutes'); // Imported project routes
const blogs = require('./Routes/blogs'); // Imported blog routes
const app = express();

app.use(cors());
app.use(express.json());


app.use('/api', blogs);  
app.use('/api', projectRoutes);  

// Proxy route to fetch raw file content from GitHub
app.get('/api/proxy-file', (req, res) => {
  const { fileUrl } = req.query;  // Get the file URL from the query parameters
  axios.get(fileUrl, { responseType: 'text' })
    .then(response => {
      res.send(response.data);  // Send the raw content back to the frontend
    })
    .catch(error => {
      console.error('Error fetching file:', error);
      res.status(500).send('Error fetching file');
    });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

