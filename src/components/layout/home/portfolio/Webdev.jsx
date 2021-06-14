import React from 'react';
import './Webdev.scss';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css"
// import Swiper core and required modules
import SwiperCore, { Pagination, Autoplay, Navigation } from 'swiper/core';

//Import images for Web App projects
import project1img from '../../../../assets/socialnetwork1.png';
import project2img from '../../../../assets/racingcar.png';
import project3img from '../../../../assets/socialmedia.png';

//Import images for Web App tags
import reactJS from '../../../../assets/reactJS.png';
import redux from '../../../../assets/redux.png';
import node from '../../../../assets/node.png';
import mongo from '../../../../assets/mongo.png';
import p5JS from '../../../../assets/p5JS.png';
import tensorflowJS from '../../../../assets/tensorflowJS.png';
import canvas from '../../../../assets/canvas.png';
import javascript from '../../../../assets/js.png';
import materialUI from '../../../../assets/material.png';
import firebase from '../../../../assets/firebase.png';

// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation]);

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
                                <img src={reactJS} alt="" style={{"width":"6.5rem"}}></img>
                                <img src={redux} alt="" style={{"width":"3.5rem"}}></img>
                                <img src={node} alt="" style={{"width":"5.5rem"}}></img>
                                <img src={mongo} alt="" style={{"width":"5.5rem"}}></img>
                                
                            </div>
                            <div className="project_buttons">
                                <button className="web_button">View Site</button>
                                <button className="more_button">Learn More</button>
                            </div>
                        </div>
                        <div className="project_img">
                        <Swiper pagination={true} className="mySwiper" autoplay={{"delay": 1200}}>
                            <SwiperSlide><img src={project1img} alt=""></img></SwiperSlide>
                            <SwiperSlide><img src={project1img} alt=""></img></SwiperSlide>
                            <SwiperSlide><img src={project1img} alt=""></img></SwiperSlide>
                        </Swiper>
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
                                <img src={p5JS} alt="" style={{"width":"7rem"}}></img>
                                <img src={tensorflowJS} alt="" style={{"width":"8rem"}}></img> 
                                <img src={canvas} alt="" style={{"width":"5rem", "height": "5rem", "opacity":"70%"}}></img>
                                <img src={javascript} alt="" style={{"width":"4rem"}}></img> 
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
                                <img src={reactJS} alt="" style={{"width":"6.5rem"}}></img>
                                <img src={redux} alt="" style={{"width":"3.5rem"}}></img>
                                <img src={materialUI} alt="" style={{"width":"4rem"}}></img>
                                <img src={firebase} alt="" style={{"width":"4rem"}}></img>
                            </div>
                            <div className="project_buttons">
                                <button className="web_button">View Site</button>
                                <button className="more_button">Learn More</button>
                            </div>
                        </div>
                        <div className="project_img">
                            <Swiper pagination={true} className="mySwiper" autoplay={{"delay": 1200}}>
                                <SwiperSlide><img src={project3img} alt=""></img></SwiperSlide>
                                <SwiperSlide><img src={project3img} alt=""></img></SwiperSlide>
                                <SwiperSlide><img src={project1img} alt=""></img></SwiperSlide>
                            </Swiper>
                        </div>
                     </div>
                 </div>

                 <div className="more_work">
                    <h6>Other Web Dev projects:</h6>

                    <Swiper slidesPerView={1} 
                            spaceBetween={5}
                            centeredSlides={true}
                            pagination={{"clickable": true}} 
                            navigation={true} 
                            breakpoints={{
                                "640": {
                                  slidesPerView: 1,
                                  spaceBetween: 5
                                },
                                "768": {
                                  slidesPerView: 2,
                                  spaceBetween: 40
                                },
                                "1024": {
                                  slidesPerView: 3,
                                  spaceBetween: 50
                                }
                              }}
                            className="mySwiper" >
                        <SwiperSlide>
                            <div className="web_other">
                                <div className="webother_img">
                                </div>
                                <div className="webother_des">
                                    <h4>Bakery Website</h4>
                                    <button className="web_button">View Site</button>
                                </div>
                                
                            </div>  
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="web_other">
                                <div className="webother_img">

                                </div>
                                <div className="webother_des">
                                    <h4>Bakery Website</h4>
                                    <button className="web_button">View Site</button>
                                </div>
                                
                            </div>  
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="web_other">
                                <div className="webother_img">

                                </div>
                                <div className="webother_des">
                                    <h4>Bakery Website</h4>
                                    <button className="web_button">View Site</button>
                                </div>
                                
                            </div>  
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="web_other">
                                <div className="webother_img">

                                </div>
                                <div className="webother_des">
                                    <h4>Bakery Website</h4>
                                    <button className="web_button">View Site</button>
                                </div>
                                
                            </div>  
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="web_other">
                                <div className="webother_img">

                                </div>
                                <div className="webother_des">
                                    <h4>Bakery Website</h4>
                                    <button className="web_button">View Site</button>
                                </div>
                                
                            </div>  
                        </SwiperSlide>
                        


                    </Swiper>
                 </div>

             </div>
        </div>
    )
}

