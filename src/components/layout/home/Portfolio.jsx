import React, { Component, Fragment } from 'react';

import './Portfolio.scss';

import project1img from '../../../assets/socialnetwork1.png';

class Portfolio extends Component{
    render(){
        return(
            <Fragment>
                <div className="portfolio_div">
                    <div className="portfolio_title">
                        <h3>Projects</h3>
                    </div>
                    <div className="portfolio_webdev">
                        <div className="webdev_title">
                            <h4>Web Development</h4>
                        </div>
                        <div className="webdev_portfolios">
                            <div className="webdev_1">
                                <div className="webdev_project1">
                                    <div className="project1_des">
                                        <h3>Social Media Web App</h3>
                                        <p>Created a system that reads sound samples from an off-chip flash memory 
                                           and store them to the on-chip memory using a state machine. The samples 
                                           are transferred to the audio core as an output by designing audio CODEC</p>
                                        <div className="project_tags">
                                            <p>ReactJS</p>
                                            <p>Redux</p>
                                            <p>NodeJS</p>
                                            <p>MongoDB</p>
                                        </div>
                                        <div className="project_buttons">
                                            <button className="web_button">View Site</button>
                                            <button className="more_button">Learn More</button>
                                        </div>
                                    </div>
                                    <div className="project1_img">
                                        <img src={project1img} alt=""></img>
                                    </div>
                                </div>
                            </div>
                            <div className="webdev_2">
                                <div className="webdev_project2">
                                    <div className="project2_img">
                                        
                                    </div>
                                    <div className="project2_des">

                                    </div>
                                    
                                </div>
                            </div>
                            <div className="webdev_3">
                                <div className="webdev_project3">
                                    <div className="project3_des">

                                    </div>
                                    <div className="project3_img">
                                        
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Portfolio;