import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ProjectIDE = () => {
  const { id } = useParams();  // Get the project ID from the URL
  const [project, setProject] = useState(null);
  const [selectedFileContent, setSelectedFileContent] = useState('');

  useEffect(() => {
    // Fetch project details
    axios.get(`http://localhost:5000/api/projects/${id}`)
      .then(response => {
        setProject(response.data);
      })
      .catch(error => {
        console.error('Error fetching project details:', error);
      });
  }, [id]);

  // Handle file selection from the file tree
  const handleFileClick = (fileUrl) => {
    setSelectedFileContent(fileUrl);  // Set the selected file's URL to display
  };

  if (!project) {
    return <div>Loading...</div>;  // Show loading while the project is being fetched
  }

  return (
    <div>
      <h1>{project.name}</h1>
      <p>{project.description}</p>

      <div>
        <h3>Project Files</h3>
        <ul>
          {project.files.map((file) => (
            <li key={file.id} onClick={() => handleFileClick(file.github_url)}>
              {file.file_path}
            </li>
          ))}
        </ul>
      </div>

      <div>
        {selectedFileContent ? (
          <div>
            <h4>File Content:</h4>
            <a href={selectedFileContent} target="_blank" rel="noopener noreferrer">Open file in new tab</a>
          </div>
        ) : (
          <div>Select a file to view</div>
        )}
      </div>
    </div>
  );
};

export default ProjectIDE;


