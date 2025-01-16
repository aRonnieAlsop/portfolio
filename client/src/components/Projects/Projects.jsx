import React from 'react';
import './../Projects/Projects.css';
import { Link } from 'react-router-dom';

const Projects = () => {
  // Hard-coded array of projects 
  const listProjects = [
    { 
      id: 'hello_world_test', 
      name: 'Hello World Test', 
      description: 'A simple test project',
      githubUrl: 'https://github.com/aRonnieAlsop/hello_world_test',
      image_url: '../../assets/hello_world_test_deploy.png',
      demoUrl: 'https://aronniealsop.github.io/hello_world_test/',
     },
    { 
      id: 'portfolio_website', 
      name: 'Portfolio', 
      description: 'A more complex project but still a test project for the portfolio site.',
      githubUrl: 'https://github.com/aRonnieAlsop/portfolio_website',
      image_url: '../../assets/faux_portfolio_sample.png',
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
          <img src={project.image_url} alt={project.title} className="project-image" />
            <h2>{project.name}</h2> 
            <p>{project.description}</p> 
            <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="demo-button">
             Demo
            </a>
            {/* Link to the GitHub repository */}
           <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="repo-button">
            Repo
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
