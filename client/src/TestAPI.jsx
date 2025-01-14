import React, { useState } from 'react';
import axios from 'axios';

const TestAPI = () => {
  const [postId, setPostId] = useState('');
  const [response, setResponse] = useState(null);
  const [error, setError] = useState('');

  const fetchBlogPost = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/api/blogs/${postId}`);
      setResponse(res.data);
      setError(''); // Clear any previous error
    } catch (err) {
      console.error(err);
      setError('Failed to fetch the blog post. Check the ID or server.');
      setResponse(null); // Clear any previous response
    }
  };

  return (
    <div>
      <h1>Test API</h1>
      <input
        type="text"
        placeholder="Enter Blog Post ID"
        value={postId}
        onChange={(e) => setPostId(e.target.value)}
      />
      <button onClick={fetchBlogPost}>Fetch Blog Post</button>

      {error && <p style={{ color: 'red' }}>{error}</p>}
      {response && (
        <div>
          <h2>{response.title}</h2>
          <p>{response.content}</p>
        </div>
      )}
    </div>
  );
};

export default TestAPI;
