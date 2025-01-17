import React from 'react';
import './../Websites/Websites.css';
import { Link } from 'react-router-dom';

const Websites = () => {
  // Hard-coded array of websites 
  const listWebsites = [
    {
      id: 'hello_world_test',
      name: 'Hello World Test',
      description: 'A simple test project',
      image_url: '../../assets/hello_world_test_deploy.png',
      visit_site: 'https://aronniealsop.github.io/hello_world_test/',
    },
  ];

  return (
    <div className="websites-container">
      <div className="websites-wrapper">
        <h1 className="websites-page-title">Websites</h1>
      </div>
      <div className="websites">
        {listWebsites.map((website) => (
          <div key={website.id} className="websites-card">
            <img src={website.image_url} alt={website.title} className="website-image" />
            <h2>{website.name}</h2>
            <p>{website.description}</p>
            <a href={website.visit_site} target="_blank" rel="noopener noreferrer" className="site-button">
              Visit Site
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Websites;
