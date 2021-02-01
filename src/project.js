import React from 'react';
import stocks from './stockmarket.jpg';
import ganresult from "./DCGAN result.PNG";
import website from "./website.jpg";
import spreadsheet from './spreadsheet.jpg'
import './project.css';


class Project extends React.Component {
    render() {
        return (
            <div className="project">
                <div className='projects-title'>
                    Projects
                </div>
                <div className="project-section">
                    <div className="project-card">
                        <img className="card-image" src={stocks} alt="Stock Market Indicators"/>
                        <div className='card-title'>
                            Deep RL: Stock Trading
                        </div>
                        <p className='card-description'>
                            I implemented and trained an advantage actor critic
                            model that learned how to manage a portfolio by trading
                            in the stock market.
                        </p>
                        <p className='card-tech'>
                            Tech: Python, Pytorch, OpenAI Gym, NumPy, Matplotlib 
                        </p>
                        <div className='card-buttons'>
                            <a id="card-button" class="btn btn-primary" href="https://github.com/david-wu-dev/Deep-RL-Stock-Trading" role="button">{"CODE >"}</a>
                            <a id="card-button" class="btn btn-primary" href="/~wudavidh/#/projects/stock-rl" role="button">{"LEARN MORE >"}</a>
                        </div>
                    </div>
                    <div className="project-card">
                        <img className="card-image" src={ganresult} alt="Generated numbers"/>
                        <div className='card-title'>
                            MNIST DCGAN/GAN
                        </div>
                        <p className='card-description'>
                            I implemented a deep convolutional generative adversarial network 
                            (DCGAN) in Pytorch and compared its performance to a vanilla GAN.
                        </p>
                        <p className='card-tech'>
                            Tech: Python, Pytorch, NumPy, Matplotlib 
                        </p>
                        <div className='card-buttons'>
                            <a id="card-button" class="btn btn-primary" href="https://github.com/david-wu-dev/Pytorch-MNIST-DCGAN" role="button">{"CODE >"}</a>
                            <a id="card-button" class="btn btn-primary" href="/~wudavidh/#/projects/mnist-gan" role="button">{"LEARN MORE >"}</a>
                        </div>
                    </div>
                    <div className="project-card">
                        <img className="card-image" src={spreadsheet} alt="Spreadsheet"/>
                        <div className='card-title'>
                            Agilent Intern Project
                        </div>
                        <p className='card-description'>
                            As a software engineering intern at Agilent Technologies, I developed
                            an internal web application to track the status and fulfillment of orders.
                        </p>
                        <p className='card-tech'>
                            Tech: Javascript, React, NodeJS, SQL, <br/>Microsoft SQL Server
                        </p>
                    </div>
                    <div className="project-card">
                        <img className="card-image" src={website} alt="website"/>
                        <div className='card-title'>
                            React Personal Website
                        </div>
                        <p className='card-description'>
                            This website was created using React and is a place for me
                            to host my various other upcoming projects where people can 
                            interact with them.
                        </p>
                        <p className='card-tech'>
                            Tech: Javascript, React, CSS, HTML 
                        </p>
                        <div className='card-buttons'>
                            <a id="card-button" class="btn btn-primary" href="https://github.com/david-wu-dev/react-personal-website" role="button">{"CODE >"}</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Project