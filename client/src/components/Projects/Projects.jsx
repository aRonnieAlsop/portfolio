import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './../Projects/Projects.css';
import { Link } from 'react-router-dom';

const Projects = () => {
    const [listProjects, setListprojects] = useState([]);

    useEffect(() => {
        // Fetches projects from the backend
        axios.get('http://localhost:5000/api/projects')
        .then(response => {
            setListprojects(response.data);
        })
        .catch(error => {
            console.error('Error fetching blog posts:', error);
        })
    }, []);

    return (
            <div className="projects-container">
            <div className="projects-wrapper">
                <h1 className="projects-page-title">Projects</h1> 
             </div> 
              <div className="projects">
              {listProjects.map((project) => (
            <div key={project.id} className="projects-card">
                <h2>{project.name}</h2> {/* Make sure this matches the property in the response */}
                <Link to={`/projects/${project.id}`} className="check-it-out-button">
                    Check It Out
                </Link>
            </div>
            ))}
              </div>
            </div>
    )

};

export default Projects;