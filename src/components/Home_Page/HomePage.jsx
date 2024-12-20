import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const projects = [
    { id: 1, name: "Project One", route: "/project/1" },
    { id: 2, name: "Project Two", route: "/project/2"},
];

const Home = () => {
    return (
        <div className="content-wrapper">
        <div className="homepage">
            <header className="header">
                <div className="title-box">
                    <h1 className="magazine-title">Cat Woman</h1>
                </div>
                <div className="slatted-image">
                <img
                    src="/assets/cat_woman.png"
                    alt="An image of person of interest."
                    className="image-strips"
                />
                </div>
                <div className="content">
                </div>
            </header>
        <div>
        </div>
        </div>
        </div>
    );
};

export default Home;