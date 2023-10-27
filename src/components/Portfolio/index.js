import React, { useEffect, useState } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";
import gopherImg from "./assets/gopher.png";
import turnipImg from "./assets/turnip.png";
import issueImg from "./assets/issue.png";
import kioskImg from "./assets/kiosk.png";
import regImg from "./assets/register.png";

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
                image: gopherImg,
                name: "Gopher a Friend",
                description: "Chatroom for students to discuss areas of interest. Allows post creation, editing, and deletion.",
                tech: "CSS, Express.js, Handlebars.js, Heroku, HTML, Javascript, Node.js, OnWebChat",
                github: "https://github.com/madisenvo/Gopher-a-Friend",
                deployed: "https://gopher-a-friend.herokuapp.com/"
            },
            {
                image: turnipImg,
                name: "Turnip the Zine",
                description: "Modern zine featuring local bands, a merch store, and a comments section where users can post, as well as edit and delete their comments.",
                tech: "Apollo, Bootstrap, CSS, GraphQL, HTML, JavaScript, Node.js, React, Redux, Stripe",
                github: "https://github.com/madisenvo/Turnip-the-Zine",
                deployed: "https://turnip-the-zine.herokuapp.com/"
            },
            {
                image: issueImg,
                name: "Gitlab Issue Report Form",
                description: "Allows non-IT team members to submit issues to a Gitlab project.",
                tech: "CSS, Docker, Express.js, Gitlab API, HTML, JavaScript, Node.js"
            },
            {
                image: kioskImg,
                name: "Kiosk UI",
                description: "Cryptocurrency ATM kiosk UI for over 700 machines nation wide and additional machines for international operators.",
                tech: "Bulma, HTML, JavaScript, Svelte, SCSS, Typescript, Vite"
            },
            {
                image: regImg,
                name: "User Registration Form",
                description: "Online form allowing new customers to create an account before visiting a kiosk.",
                tech: "Express.js, HTML, JavaScript, Pug, Node.js"
            }
        ];

        console.log("Fetched Portfolio: ", fetchedPortfolio);

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
                                <h4 className="tech">{port.tech}</h4>
                                {port.deployed && (
                                    <button
                                        className="btn"
                                        onClick={() => window.open(port.deployed)}
                                    >
                                        View Deployed Application
                                    </button>
                                )}
                                {port.github && (
                                    <button
                                        className="btn"
                                        onClick={() => window.open(port.github)}
                                    >
                                        View Github Repository
                                    </button>
                                )}
                                {!port.deployed && !port.github && (
                                <button className="btn">Private - no links available</button>
                            )}
                            </div>
                        </div>
                    );
                })}
            </div>
        );
    };
    
    
    
    return (
        <>
            <div className="portfolio-page">
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
