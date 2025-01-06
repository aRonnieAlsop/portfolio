import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './../Blog/Blog.css';
import { Link } from 'react-router-dom';

const Blog = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [expandedPosts, setExpandedPosts] = useState({});

  useEffect(() => {
    // Fetches blog posts from the backend
    axios.get('http://localhost:5000/api/blogs')
      .then(response => {
        setBlogPosts(response.data);  // Updates the state with the data
      })
      .catch(error => {
        console.error('Error fetching blog posts:', error);
      });
  }, []);

  return (
    <div className="blog-container">
    <div className="title-wrapper">
        <h1 className="blog-page-title">Blog Posts</h1> 
     </div> 
      <div className="blog-posts">
        {blogPosts.map((post) => (
          <div key={post.id} className="blog-post">
            <img src={post.image_url} alt={post.title} className="blog-image" />
            <p className="blog-post-date">
                {new Date(post.created_at).toLocaleDateString()}
            </p>
            <h2>{post.title}</h2>
            <p className="blog-post-content">
              {expandedPosts[post.id]
                ? post.blog_content // Show full content if expanded
                : `${post.blog_content.slice(0, 100)}...`} {/* Show a preview */}
            </p>
            <Link to={`/blogs/${post.id}`} className="read-more-button">
                Read More
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;

