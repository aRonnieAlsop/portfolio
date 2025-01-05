import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './../Blog/Blog.css';

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
    <div className="blog-container">
      <h1>Blog Posts</h1>
      <div className="blog-posts">
        {blogPosts.map((post) => (
          <div key={post.id} className="blog-post">
            <img src={post.image_url} alt={post.title} className="blog-image" />
            <h2>{post.title}</h2>
            <p>{post.content.substring(0, 150)}...</p> {/* Show an excerpt */}
            <a href={`/blog/${post.id}`} className="read-more">Read More</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;

