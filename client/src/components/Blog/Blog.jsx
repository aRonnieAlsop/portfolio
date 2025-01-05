import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Blog = () => {
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    // Fetch blog posts from the backend
    axios.get('http://localhost:5000/api/blogs')
      .then(response => {
        setBlogPosts(response.data);  // Update the state with the data
      })
      .catch(error => {
        console.error('Error fetching blog posts:', error);
      });
  }, []);

  return (
    <div>
      <h1>Blog Posts</h1>
      <ul>
        {blogPosts.map((post) => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            <small>{post.created_at}</small> {/* Displaying the created_at field */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Blog;

