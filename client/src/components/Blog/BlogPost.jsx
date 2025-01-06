import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const BlogPost = () => {
  const { id } = useParams(); // Extract the ID from the route
  const [blogPost, setBlogPost] = useState(null);

  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogPost = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/blogs/${id}`); //will need to replace with actual route
        if (!response.ok) {
          throw new Error('Failed to fetch the blog post');
        }
        const data = await response.json();
        setBlogPost(data);
      } catch (err) {
        console.error('Error fetching the blog post:', err);
        setError('It\'\s not you, it\'\s me. Please try me again later.');
        setError(err.message);
      }
    };

    fetchBlogPost();
  }, [id]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!blogPost) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <h1>{blogPost.title}</h1>
      <p>{blogPost.content}</p>
    </div>
  );
};

export default BlogPost;
