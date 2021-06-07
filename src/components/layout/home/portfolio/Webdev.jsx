import React from 'react';
import './Webdev.scss';
import project1img from '../../../../assets/socialnetwork1.png';
import project2img from '../../../../assets/racingcar.png';
import project3img from '../../../../assets/socialmedia.png';

export default function Webdev() {
    return (
        <div className="portfolio_webdev">
            <div className="title">
                <h5>
                    <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" style={{"width": "100px", "height": "100px"}}>
                        <path class="stroke1" d="M22 31L39.5688 48.5688C40.3499 49.3499 40.3499 50.6162 39.5688 51.3973L22 68.9661" stroke="#68273d" stroke-width="2.5px" style={{"animation-duration": "0.4s"}}></path>
                        <line class="line-terminal1 stroke2" x1="40.9833" y1="67.9661" x2="78.9494" y2="67.9661" stroke="#68273d" stroke-width="3.5px" style={{"animation-duration": "0.4s"}}></line>
                    </svg>
                    Web Development
                </h5>
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
                     <button>See all Web Dev projects</button>
                 </div>

             </div>
        </div>
    )
}

