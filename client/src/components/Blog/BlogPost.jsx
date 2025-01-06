import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

const BlogPost = () => {
  const { id } = useParams(); // Extract the ID from the route
  const [blogPost, setBlogPost] = useState(null);
  const [markdownContent, setMarkdownContent] = useState(''); // To store the markdown content
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogPost = async () => {
      try {
        // Fetch the blog data (title, content_file_path, etc.)
        const response = await fetch(`http://localhost:5000/api/blogs/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch the blog post');
        }
        const data = await response.json();
        setBlogPost(data);

        // Fetch the markdown file directly from the public folder
        const markdownResponse = await fetch(`/${data.content_file_path}`);
        if (!markdownResponse.ok) {
          throw new Error('Failed to fetch the markdown content');
        }
        const markdownData = await markdownResponse.text();
        setMarkdownContent(markdownData);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchBlogPost();
  }, [id]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!blogPost) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{blogPost.title}</h1>
      <div>
        {/* Render the fetched markdown content */}
        <ReactMarkdown>{markdownContent}</ReactMarkdown>
      </div>
    </div>
  );
};

export default BlogPost;
