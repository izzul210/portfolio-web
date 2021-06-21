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
import mediasosial1 from '../../../../assets/projects/mediasosial/mediasosial1a.png';
import mediasosial2 from '../../../../assets/projects/mediasosial/mediasosial2a.png';
import mediasosial3 from '../../../../assets/projects/mediasosial/mediasosial3a.png';
import racingcar from '../../../../assets/racingcar.png';
import rangkaiansosial1 from '../../../../assets/projects/rangkaiansosial/rangkaiansosial1.png';
import rangkaiansosial2 from '../../../../assets/projects/rangkaiansosial/rangkaiansosial2.png';
import rangkaiansosial3 from '../../../../assets/projects/rangkaiansosial/rangkaiansosial3.png';
import rangkaiansosial4 from '../../../../assets/projects/rangkaiansosial/rangkaiansosial4.png';

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
        <div className="portfolio_webdev" id="webdev">
            <div className="title">
                <h5>
                    <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" style={{"width": "100px", "height": "100px"}}>
                        <path class="stroke1" d="M22 31L39.5688 48.5688C40.3499 49.3499 40.3499 50.6162 39.5688 51.3973L22 68.9661" stroke="#68273d" stroke-width="2.5px" style={{"animation-duration": "0.4s"}}></path>
                        <line class="line-terminal1 stroke2" x1="40.9833" y1="67.9661" x2="78.9494" y2="67.9661" stroke="#68273d" stroke-width="3.5px" style={{"animation-duration": "0.4s"}}></line>
                    </svg>
                    <b style={{'fontSize': '1.5rem'}}>Web Development</b>
                </h5>
            </div>

            <div className="webdev_portfolios">

                <div className="webdev_1">
                    <div className="webdev_project">
                        <div className="project_des">
                            <h5>Web App</h5>
                            <h2>Social Media Web App</h2>
                            <p>Web App that allows users that sign up to make a post and comments to other user's post.</p>
                            <div className="project_tags">
                                <img src={reactJS} alt="" style={{"width":"6.5rem"}}></img>
                                <img src={redux} alt="" style={{"width":"3.5rem"}}></img>
                                <img src={materialUI} alt="" style={{"width":"4rem"}}></img>
                                <img src={firebase} alt="" style={{"width":"4rem"}}></img>
                            </div>
                            <div className="project_buttons">
                                <a href="https://mediasosial-18580.web.app/" 
                                    target="_blank" 
                                    rel="noreferrer">
                                    <button className="web_button">View Site</button>               
                                </a>
                                {/* <button className="more_button">Learn More</button> */}
                            </div>
                        </div>
                        <div className="project_img">
                        <Swiper pagination={true} className="mySwiper" autoplay={{"delay": 1200}}>
                            <SwiperSlide><img src={mediasosial1} alt=""></img></SwiperSlide>
                            <SwiperSlide><img src={mediasosial2} alt=""></img></SwiperSlide>
                            <SwiperSlide><img src={mediasosial3} alt=""></img></SwiperSlide>
                        </Swiper>
                        </div>
                    </div>
                </div>


                <div className="webdev_2">
                    <div className="webdev_project">
                        <div className="project_img">
                            <img src={racingcar} alt=""></img>
                        </div>
                        <div className="project_des">
                            <h5>Machine Learning Simulation</h5>
                            <h2>Neuroevolution Racing Cars</h2>
                            <p>A simulation of racing cars that learn to finish a race using the method of Genetic Algorithm and Neural Network
                                (Neuroevolution). The race track changes randomly every simulation using an algorithm to allow the cars to learn effectively. 
                            </p>
                            <div className="project_tags">
                                <img src={p5JS} alt="" style={{"width":"7rem"}}></img>
                                <img src={tensorflowJS} alt="" style={{"width":"8rem"}}></img> 
                                <img src={canvas} alt="" style={{"width":"5rem", "height": "5rem", "opacity":"70%"}}></img>
                                <img src={javascript} alt="" style={{"width":"4rem"}}></img> 
                            </div>
                            <div className="project_buttons">
                                <a href="https://racingcarsneuralnet.web.app/" 
                                    target="_blank" 
                                    rel="noreferrer">
                                    <button className="web_button">View Site</button>               
                                </a>
                                {/* <button className="more_button">Learn More</button> */}
                            </div>
                         </div>                
                    </div>
                </div>                            
                            
                <div className="webdev_3">
                    <div className="webdev_project">
                        <div className="project_des">
                            <h5>Web App</h5>
                            <h2>Social Network Web App</h2>
                            <p>Social Network Web App that allows users to post, comments and share their career experiences and skills.</p>
                            <div className="project_tags">
                                <img src={reactJS} alt="" style={{"width":"6.5rem"}}></img>
                                <img src={redux} alt="" style={{"width":"3.5rem"}}></img>
                                <img src={node} alt="" style={{"width":"5.5rem"}}></img>
                                <img src={mongo} alt="" style={{"width":"5.5rem"}}></img>
                            </div>
                            <div className="project_buttons">
                                <a href="https://young-thicket-35798.herokuapp.com/" 
                                    target="_blank" 
                                    rel="noreferrer">
                                    <button className="web_button">View Site</button>               
                                </a>
                                {/* <button className="more_button">Learn More</button> */}
                            </div>
                        </div>
                        <div className="project_img">
                            <Swiper pagination={true} className="mySwiper" autoplay={{"delay": 1200}}>
                                <SwiperSlide><img src={rangkaiansosial1} alt=""></img></SwiperSlide>
                                <SwiperSlide><img src={rangkaiansosial2} alt=""></img></SwiperSlide>
                                <SwiperSlide><img src={rangkaiansosial3} alt=""></img></SwiperSlide>
                                <SwiperSlide><img src={rangkaiansosial4} alt=""></img></SwiperSlide>
                            </Swiper>
                        </div>
                     </div>
                 </div>

                 <div className="more_work">
                    <h5 style={{'paddingBottom': '2rem'}}>Other projects:</h5>

                    <Swiper slidesPerView={1} 
                            spaceBetween={5}
                            freeMode={true}
                            pagination={{"clickable": true}} 
                            navigation={true} 
                            breakpoints={{
                                "640": {
                                  slidesPerView: 1,
                                  spaceBetween: 1
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
                                <div className="webother_img other1">
                                </div>
                                <div className="webother_des">
                                    <h5>Website</h5>
                                    <h4>Bakery Website</h4>
                                    <div className="class_button">
                                    <a href="https://bakedgoods-02.web.app/" 
                                        target="_blank" 
                                        rel="noreferrer">
                                        <button className="web_button">View Site</button>               
                                    </a>
                                    </div>
                                </div>
                            </div>  
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="web_other">
                                <div className="webother_img other2">
                                </div>
                                <div className="webother_des">
                                    <h5>Website</h5>
                                    <h4>Portfolio Website</h4>
                                    <div className="class_button">
                                    <a href="/" 
                                        target="_blank" 
                                        rel="noreferrer">
                                        <button className="web_button">View Site</button>               
                                    </a>
                                    </div>
                                </div>
                            </div>  
                        </SwiperSlide>

                        
                    </Swiper>
                 </div>

             </div>
        </div>
    )
}

