import React, {useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {

    const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 1520);

    useEffect(() => {
      const handleResize = () => {
        setIsLargeScreen(window.innerWidth > 1520);
      };
  
      window.addEventListener('resize', handleResize);
  
      // Cleanup on component unmount
      return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="content-wrapper">
            <div className="homepage">
                <div className="info-bar">
                    <span className="what-it-is">
                        Project Portfolio
                    </span>
                </div>
                <header className="header">
                    <div className="title-box">
                        <div className="title-container">                        
                            <h1 className="title">Arron Alsop</h1>
                            <h2 className="subtitle">Software Engineer</h2>
                            </div>
        {isLargeScreen && (
          <div className="stacked-boxes">
            <Link to="/projects" className="box">Projects</Link>
            <Link to="/websites" className="box">Websites</Link>
            <Link to="/blog" className="box">Blog</Link>
          </div>
        )}
        </div>
        {isLargeScreen && (
                        <div className="media-container">
                        <div className="slatted-image">
                            <img 
                            src="/assets/cat_woman.png"
                            alt="place_holder_image"
                            className="image-strips"
                            />
                        </div>
                    </div>      
        )}
        </header>
      {!isLargeScreen && (
        <main className="mobile-nav-links"> 
        <div className="stacked-boxes">
          <Link to="/projects" className="box">Projects</Link>
          <Link to="/websites" className="box">Websites</Link>
          <Link to="/blog" className="box">Blog</Link>
        </div>
        </main>
      )}
      {!isLargeScreen && (
          <footer className="footer">
            <div className="media-container">
              <div className="slatted-image">
                <img
                  src="/assets/cat_woman.png"
                  alt="place_holder_image"
                  className="image-strips"
                />
              </div>
            </div>
          </footer>
        )}
    </div>
    </div>
    );
};

export default HomePage;