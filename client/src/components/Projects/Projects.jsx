import React from 'react';
import './../Projects/Projects.css';
import { Link } from 'react-router-dom';

const Projects = () => {
  // Hard-coded array of projects based on the folder names
  const listProjects = [
    { 
      id: 'hello_world_test', 
      name: 'Hello World Test', 
      description: 'A simple test project',
      githubUrl: 'https://github.com/aRonnieAlsop/hello_world_test',
     },
    { 
      id: 'tarot_game', 
      name: 'Tarot Game', 
      description: 'A more complex project but still a test project for the portfolio site.',
      githubUrl: 'https://github.com/aRonnieAlsop/tarot_game',
    },
  ];

  return (
    <div className="projects-container">
      <div className="projects-wrapper">
        <h1 className="projects-page-title">Projects</h1> 
      </div> 
      <div className="projects">
        {listProjects.map((project) => (
          <div key={project.id} className="projects-card">
            <h2>{project.name}</h2> 
            <p>{project.description}</p> 
            <Link to={`/projects/${project.id}`} className="check-it-out-button">
              Check It Out
            </Link>
            {/* Link to the GitHub repository */}
           <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="github-button">
              Look at the Code
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
