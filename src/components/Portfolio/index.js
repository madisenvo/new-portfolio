import React, { useEffect, useState } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";

const Portfolio = () => { 
    const [letterClass, setLetterClass] = useState('text-animate');
    const [portfolio, setPortfolio] = useState([]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);

        return () => {
            clearTimeout(timer);
        };
    }, []);

    useEffect(() => {
        // Fetch portfolio data from a different data source or store it locally
        const fetchedPortfolio = [
            {
                name: "Project 1",
                description: "Description of Project 1",
                image: "project1.jpg",
                url: "https://example.com/project1"
            },
            {
                name: "Project 2",
                description: "Description of Project 2",
                image: "project2.jpg",
                url: "https://example.com/project2"
            },
            // Add more portfolio items as needed
        ];

        setPortfolio(fetchedPortfolio);
    }, []);

    const renderPortfolio = (portfolio) => {
        return (
            <div className="images-container">
                {portfolio.map((port, idx) => {
                    return (
                        <div className="image-box" key={idx}>
                            <img 
                                src={port.image}
                                className="portfolio-image"
                                alt="portfolio"
                            />
                            <div className="content">
                                <p className="title">{port.name}</p>
                                <h4 className="description">{port.description}</h4>
                                <button
                                    className="btn"
                                    onClick={() => window.open(port.url)}
                                >
                                    View
                                </button>
                            </div>
                        </div>
                    );
                })}
            </div>
        );
    };

    return (
        <>
            <div className="container portfolio-page">
                <h1 className="page-title">
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={"Portfolio".split("")}
                        idx={15}
                    />
                </h1>
                <div>{renderPortfolio(portfolio)}</div>
            </div>
            <Loader type="ball-rotate" />
        </>
    );
};

export default Portfolio;
