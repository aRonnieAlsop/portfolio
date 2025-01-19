const express = require('express');
const cors = require('cors');
const path = require('path');
const db = require('./db/init_db'); // Imported database connection
const blogs = require('./Routes/blogs'); // Imported blog routes



const app = express();

app.use(cors());
app.use(express.json());

app.use('/projects', express.static(path.join(__dirname, 'projects')));

app.use('/api', blogs);


const PORT = process.env.PORT || 5000;
app.listen(PORT, async () => {
  console.log(`Server is running on port ${PORT}`);
  await connectDB(); 
});

