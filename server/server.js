const express = require('express');
const cors = require('cors');
const path = require('path');
// const db = require('./db/init_db'); // Imported database connection
const blogs = require('./Routes/blogs'); // Imported blog routes
const mongoose = require('mongoose'); //MongoDB connection
require('dotenv').config();

const Comment = require('./models/Comment'); //comment model test route

const app = express();

app.use(cors());
app.use(express.json());


// MongoDB connection setup
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
    console.error('Stack Trace:', error.stack);
    process.exit(1);
  }
}

app.get('/api/comments', async (req, res) => {
  try {
    const comments = await Comment.find().limit(10); // Fetch the first 10 comments
    res.json(comments);
  } catch (err) {
    console.error('Error fetching comments:', err.message);
    res.status(500).send('Error fetching comments');
  }
});

app.use('/projects', express.static(path.join(__dirname, 'projects')));

app.use('/api', blogs);


const PORT = process.env.PORT || 5000;
app.listen(PORT, async () => {
  console.log(`Server is running on port ${PORT}`);
  await connectDB(); 
});

