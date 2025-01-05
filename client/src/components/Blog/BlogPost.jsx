import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function BlogPost() {
  const { id } = useParams(); // Get the ID from the URL
  const [blogPost, setBlogPost] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchBlogPost = async () => {
      try {
        // Need to populate with 1 blog--getting by ID
        const response = await axios.get('/api/blog/${id}'); 
        setBlogPost(response.data);
      } catch (err) {
        console.error('Error fetching the blog post:', err);
        setError('It\'\s not you, it\'\s me. Please try me again later.');
      }
    };

    fetchBlogPost();
  }, [id]);

  if (error) {
    return <div>{error}</div>
  }

  if (!blogPost) {
    return <div>Loading...</div>
  }

  return (
    // <div className="blog-post">
    //   <h1>{blogPost.title}</h1>
    //   <img src={blogPost.image_url} alt={blogPost.title} className="blog-image" />
    //   <p className="blog-date">Published on: {new Date(blogPost.created_at).toLocaleDateString()}</p>
    //   <div className="blog-content">{blogPost.content}</div>
    // </div>
    <div>
    <h1>{blogPost.title}</h1>
    <p>{blogPost.content}</p>
  </div>
  );
}

export default BlogPost;



