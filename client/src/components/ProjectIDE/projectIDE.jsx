import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ProjectIDE = () => {
    const { id } = useParams(); // get project id from URL
    const [projectFile, setProjectFile] = useState(null);

    useEffect(() => {
        // fetch file content for the project
        axios.get(`http://localhost:5000/api/projects/${id}`)
            .then(response => {
                setProjectFile(response.data); // store the project file data
            })
            .catch(error => {
                console.error('Error fetching project file:', error);
            });
    }, [id]);

    return (
        <div className="project-detail">
        <h1>Project: {id}</h1> 
        {projectFile ? (
          <div>
            <h2>File: {projectFile.file_name}</h2> 
            <pre>{projectFile.file_content}</pre> 
          </div>
        ) : (
          <p>Loading project file...</p> 
        )}
      </div>
    );
};

export default ProjectIDE;