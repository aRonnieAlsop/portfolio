import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ProjectIDE = () => {
  const { id } = useParams();  // Get the project ID from the URL
  const [project, setProject] = useState(null);
  const [selectedFileContent, setSelectedFileContent] = useState('');

  useEffect(() => {
    axios.get(`http://localhost:5000/api/projects/${id}`)
      .then(response => {
        setProject(response.data);
        console.log("Project files:", response.data.files);  // Log the files array
      })
      .catch(error => {
        console.error('Error fetching project details:', error);
      });
  }, [id]);
  

  // Handle file selection from the file tree
  const handleFileClick = (fileUrl) => {
    // Fetch the file content from the backend proxy
    axios.get(`http://localhost:5000/api/proxy-file`, { params: { fileUrl } })
      .then(response => {
        setSelectedFileContent(response.data);  // Set the content of the file
      })
      .catch(error => {
        console.error('Error fetching file content:', error);
      });
  };

  if (!project) {
    return <div>Loading...</div>;  // Show loading while the project is being fetched
  }

  return (
<div style={{ width: '25%', borderRight: '2px solid #ccc', padding: '10px' }}>
  <h3>Project Files</h3>
  <ul style={{ listStyleType: 'none', padding: 0 }}>
    {/* Render the list of files */}
    {project.files.map((file) => (
      <li
        key={file.id}
        style={{
          cursor: 'pointer',
          padding: '5px',
          backgroundColor: '#f5f5f5',
          marginBottom: '5px',
          borderRadius: '4px',
        }}
        onClick={() => handleFileClick(file.github_url)}  // Ensure this function is triggered on click
      >
        {file.file_path}
      </li>
    ))}
  </ul>
</div>

  );
};

export default ProjectIDE;
