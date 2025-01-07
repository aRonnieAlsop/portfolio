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

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

