import React, { useEffect, useState } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";
import gopherImg from "./assets/gopher.png";
import turnipImg from "./assets/turnip.png";

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
        const fetchedPortfolio = [
            {
                image: turnipImg,
                name: "Turnip the Zine",
                description: "Modern zine featuring local bands, a merch store, and a comments section where users can post, as well as edit and delete their comments. Built with Apollo, Bootstrap, CSS, GraphQL, HTML, JavaScript, Node.js, React, Redux, Stripe.",
                github: "https://github.com/madisenvo/Turnip-the-Zine",
                deployed: "https://turnip-the-zine.herokuapp.com/"
            },
            {
                image: gopherImg,
                name: "Gopher a Friend",
                description: "Chatroom for students to discuss areas of interest. Allows post creation, editing, and deletion. Built using HTML, CSS, Express.js, Handlebars.js, Heroku, Javascript, Node.js, OnWebChat",
                github: "https://github.com/madisenvo/Turnip-the-Zine",
                deployed: "https://turnip-the-zine.herokuapp.com/"
            },
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
                                    onClick={() => window.open(port.deployed)}
                                >
                                    View Deployed Application
                                </button>
                                <button
                                    className="btn"
                                    onClick={() => window.open(port.github)}
                                >
                                    View Github Repository
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
