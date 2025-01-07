import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ProjectDetail = () => {
    const { id } = useParams(); // Gets the project ID from the URL
    const [project, setProject] = useState(null);

    useEffect(() => {
        // Fetch the project details using the project ID from the URL
        axios.get(`http://localhost:5000/api/projects/${id}`)
            .then(response => {
                setProject(response.data);
            })
            .catch(error => {
                console.error('Error fetching project details:', error);
            });
    }, [id]);

    if (!project) {
        return <div>Loading...</div>; // Display loading while the project is being fetched
    }

    return (
        <div>
            <h1>{project.name}</h1>
            <p>{project.description}</p>
            <div>
                {project.files && project.files.map((file) => (
                    <div key={file.id}>
                        <h3>{file.file_path}</h3>
                        <a href={file.github_url} target="_blank" rel="noopener noreferrer">View File</a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProjectDetail;
