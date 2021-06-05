import React from 'react';
import { GiSpiderWeb } from 'react-icons/gi';

import project1img from '../../../../assets/socialnetwork1.png';
import project2img from '../../../../assets/racingcar.png';
import project3img from '../../../../assets/socialmedia.png';

export default function Webdev() {
    return (
        <div className="portfolio_webdev">

            <div className="title">
                <h5><GiSpiderWeb />Web Development</h5>
            </div>

            <div className="webdev_portfolios">

                <div className="webdev_1">
                    <div className="webdev_project">
                        <div className="project_des">
                            <h5>Web App</h5>
                            <h2>Social Network Web App</h2>
                            <p>Created a system that reads sound samples from an off-chip flash memory 
                                and store them to the on-chip memory using a state machine.</p>
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

                        <div className="project_img">
                            <img src={project1img} alt=""></img>
                        </div>
                    </div>
                </div>


                <div className="webdev_2">
                    <div className="webdev_project">
                        <div className="project_img">
                            <img src={project2img} alt=""></img>
                        </div>
                        <div className="project_des">
                            <h5>Machine Learning Simulation</h5>
                            <h2>Neuroevolution Racing Cars</h2>
                            <p> The samples are transferred to the audio core as an output by designing audio CODEC</p>
                            <div className="project_tags">
                                <p>TensorflowJS</p> 
                                <p>p5.js</p>
                                <p>HTML Canvas</p>
                                <p>Javascript</p>
                            </div>
                            <div className="project_buttons">
                                <button className="web_button">View Site</button>
                                <button className="more_button">Learn More</button>
                            </div>
                         </div>                
                    </div>
                </div>                            
                            
                <div className="webdev_3">
                    <div className="webdev_project">
                        <div className="project_des">
                            <h5>Web App</h5>
                            <h2>Social Media Web App</h2>
                            <p>Created a system that reads sound samples from an off-chip flash memory 
                               and store them to the on-chip memory using a state machine.</p>
                            <div className="project_tags">
                                <p>ReactJS</p>
                                <p>Redux</p>
                                <p>Firebase</p>
                                <p>Material UI</p>
                            </div>
                            <div className="project_buttons">
                                <button className="web_button">View Site</button>
                                <button className="more_button">Learn More</button>
                            </div>
                        </div>
                        <div className="project_img">
                            <img src={project3img} alt=""></img>
                        </div>
                     </div>
                 </div>

                 <div className="more_work">
                     <button >View More Web Dev Projects</button>
                 </div>

             </div>
        </div>
    )
}


