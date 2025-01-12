import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
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
                            <h1 className="title">Selina K.</h1>
                            <h2 className="subtitle">Software Engineer</h2>
                            </div>
                        <div className="stacked-boxes">
                            <Link to="/projects" className="box">Projects</Link>
                            <Link to="/websites" className="box">Websites</Link>
                            <Link to="/blog" className="box">Blog</Link>
                        </div>
                    </div>
                    <div className="media-container">
                        <div className="slatted-image">
                            <img 
                            src="/assets/cat_woman.png"
                            alt="place_holder_image"
                            className="image-strips"
                            />
                        </div>
                    </div>
                </header>

            </div>
        </div>
    );
};

export default HomePage;