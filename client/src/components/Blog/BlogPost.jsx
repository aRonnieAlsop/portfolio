import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function BlogPost() {
  const { id } = useParams(); // Get the ID from the URL
  const [blogPost, setBlogPost] = useState(null);

  useEffect(() => {
    // Fetch the blog post
    axios
      .get(`/api/blogs/${id}`)
      .then((response) => {
        setBlogPost(response.data);
      })
      .catch((error) => {
        console.error('Error fetching the blog post:', error);
      });
  }, [id]);

  if (!blogPost) {
    return <p>Loading...</p>; // Loading state
  }

  return (
    <div className="blog-post">
      <h1>{blogPost.title}</h1>
      <img src={blogPost.image_url} alt={blogPost.title} className="blog-image" />
      <p className="blog-date">Published on: {new Date(blogPost.created_at).toLocaleDateString()}</p>
      <div className="blog-content">{blogPost.content}</div>
    </div>
  );
}

export default BlogPost;



