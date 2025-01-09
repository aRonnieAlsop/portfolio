import React from 'react';
import './../Projects/Projects.css';
import { Link } from 'react-router-dom';

const Projects = () => {
  // Hard-code the array of projects based on the folder names
  const listProjects = [
    { id: 'hello_world_test', name: 'Hello World Test', description: 'A simple test project' },
    { id: 'tarot_game', name: 'Tarot Game', description: 'A more complex project but still a test project for the portfolio site.' },
    // Add more projects as needed
  ];

  return (
    <div className="projects-container">
      <div className="projects-wrapper">
        <h1 className="projects-page-title">Projects</h1> 
      </div> 
      <div className="projects">
        {listProjects.map((project) => (
          <div key={project.id} className="projects-card">
            <h2>{project.name}</h2>  {/* Project name */}
            <p>{project.description}</p> {/* Project description */}
            <Link to={`/projects/${project.id}`} className="check-it-out-button">
              Check It Out
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
