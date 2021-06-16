import React from 'react';
import './Engineering.scss';
import { Link } from 'react-router-dom';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"
// import Swiper core and required modules
import SwiperCore, { Pagination, Navigation } from 'swiper/core';

import reportPDF from '../../../../assets/Control_for_SCARA_Robot.pdf';

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);

export default function Engineering() {
    return (
        <div className="portfolio_engine" id="engineering">
            <div className="title">
                <h5>
                    <svg width="150" height="150" viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg" style={{"width": "146px", "height": "146px", "transform": "rotateY(180deg)"}}>
                        <g class="astronaut1-man" style={{"animation-duration": "1.3s"}}><path class="fillCls8" d="M86.4865 40.8469L99.571 50.8266L97.9078 67.0159L96.464 78.3738C96.324 79.475 95.7327 80.4685 94.8315 81.1166L91.3101 83.6494C91.3101 83.6494 90.4767 86.3099 88.2607 88.3059C86.0447 90.3018 83.6035 90.3018 83.6035 90.3018V88.0841C83.6035 88.0841 85.1542 88.0967 86.4865 86.9753C87.8189 85.8538 88.5934 83.6494 88.5934 83.6494H85.3777L86.4865 40.8469Z" fill="#D2699D" stroke-width="2px"></path><path class="fillCls3" d="M37.9197 96.2896C44.3511 88.9712 57.4356 80.5439 57.4356 80.5439L86.2658 83.4269C86.2658 83.4269 87.0041 88.5276 84.159 96.2896C82.1003 101.906 75.8426 109.152 75.8426 109.152C75.8426 109.152 77.7377 113.365 78.3929 116.138C79.0298 118.833 79.1691 123.124 79.1691 123.124L80.4998 131.108C80.4998 131.108 74.2902 135.543 68.9677 136.208C67.1891 135.818 64.754 134.656 64.754 134.656V131.108L69.8547 126.672L67.8588 123.124C67.8588 123.124 62.5363 113.144 61.4274 109.152C61.1001 103.974 64.754 96.2896 64.754 96.2896L50.1171 103.386C50.1171 103.386 48.3429 113.144 46.1252 116.693C45.6745 119.701 45.9035 124.455 45.9035 124.455C45.9035 124.455 37.9197 128.003 31.7101 127.338C29.4504 126.453 26.6094 123.789 26.6094 123.789C26.6094 123.789 27.3792 122.103 28.1618 121.239L35.0367 118.689V115.14C35.0367 115.14 34.5529 102.932 37.9197 96.2896Z" fill="rgba(0,0,0,1)" stroke-width="2px"></path><path class="fillCls9" d="M93.0565 56.9321C93.1362 56.3144 93.499 55.769 94.038 55.457L94.2329 55.3441C95.646 54.5259 97.3911 55.6545 97.2246 57.2789L96.275 66.5409C96.161 67.6532 95.1572 68.4559 94.0471 68.3226L93.6292 68.2725C92.5257 68.14 91.7419 67.1333 91.884 66.0311L93.0565 56.9321Z" fill="rgba(255,255,255,1)" stroke-width="2px"></path><path class="fillCls9" d="M93.0683 49.175L92.8302 48.9822C92.3184 48.5677 91.6097 48.4956 91.0249 48.7985C89.9615 49.3493 89.8154 50.8116 90.7489 51.5619L90.9877 51.7539C91.4988 52.1646 92.204 52.2354 92.7865 51.9343C93.8482 51.3854 93.9972 49.9272 93.0683 49.175Z" fill="rgba(255,255,255,1)" stroke-width="2px"></path><path class="fillCls2" d="M101.567 65.9069C92.6959 55.2494 86.2646 49.7176 86.2646 49.7176H63.6439C63.6439 49.7176 56.4307 47.3822 52.7771 45.5039C47.6883 42.8878 41.4668 36.1895 41.4668 36.1895C41.4668 36.1895 36.5891 30.6328 35.479 33.5283C32.3746 35.746 36.3661 40.625 36.3661 40.625C36.3661 40.625 41.9072 48.9621 46.5675 53.2659C50.6281 57.0159 58.0996 61.4715 58.0996 61.4715C58.0996 61.4715 59.0153 68.5248 58.5432 73.0035C58.2297 75.9772 57.2121 80.5438 57.2121 80.5438C57.2121 80.5438 60.0961 84.1048 69.1882 86.088C78.2803 88.0713 86.2641 84.5356 86.2641 84.5356C86.2641 84.5356 87.2337 79.2726 87.5952 75.8866C87.909 72.9472 87.817 68.3464 87.817 68.3464C87.817 68.3464 90.9883 69.3539 92.6959 70.5641C97.3544 78.0918 98.6838 82.0962 98.6838 82.0962C98.6838 82.0962 102.235 90.0675 106.889 87.6404C111.104 86.0881 107.336 78.5354 107.336 78.5354C107.336 78.5354 104.895 71.2169 101.567 65.9069Z" fill="rgba(105,105,105,1)" stroke-width="2px"></path><path class="fillCls2" d="M106.776 81.9773L105.541 79.9907L101.765 82.4108L102.54 84.245C102.678 84.5693 102.772 84.9096 102.815 85.2592C102.876 85.7584 102.962 86.5246 103 87.1579C103.02 87.4865 103.061 87.8135 103.145 88.1317C103.341 88.8687 103.724 90.2861 103.99 91.1507C104.37 92.3828 104.761 94.1424 104.941 94.984C105 95.2612 105.255 95.4522 105.538 95.4304C105.806 95.4096 106.021 95.2019 106.052 94.9348L106.244 93.2657L108.143 96.3917C108.297 96.6443 108.59 96.7761 108.881 96.7231C109.234 96.6587 109.484 96.342 109.465 95.9837L109.361 94.0162L111.137 96.3686C111.355 96.657 111.757 96.7317 112.063 96.5409C112.329 96.3759 112.452 96.055 112.366 95.7548L111.57 92.9835L113.65 94.3544C113.986 94.5759 114.434 94.5124 114.696 94.2063C114.941 93.9181 114.951 93.4967 114.718 93.1979L112.377 90.1956C112.241 90.0207 112.084 89.861 111.959 89.6779C111.779 89.4139 111.593 88.9802 111.89 88.5475C112.177 88.1283 112.429 87.9687 112.583 87.908C112.685 87.8679 112.797 87.8679 112.906 87.8621L114.297 87.7884C114.575 87.7737 114.829 87.6259 114.98 87.3914C115.255 86.9617 115.101 86.3882 114.647 86.1544C113.52 85.5733 111.501 84.5282 110.06 83.7578C109.327 83.3658 108.613 83.1052 108.086 82.9434C107.552 82.7792 107.071 82.4519 106.776 81.9773Z" fill="rgba(105,105,105,1)" stroke-width="2px"></path><path class="fillCls3" d="M73.5144 71.199L81.0636 72.7067C81.0636 72.7067 81.3531 69.2041 81.565 66.9371C81.6623 65.8962 81.7674 64.6192 81.8585 63.463C82.0029 61.6293 80.7832 59.9704 78.993 59.5476C76.7672 59.022 74.5945 60.5949 74.3747 62.8714C74.2925 63.7219 74.2065 64.5788 74.1259 65.3179C73.8737 67.6313 73.5144 71.199 73.5144 71.199Z" fill="rgba(0,0,0,1)" stroke-width="2px"></path><path class="fillCls3" d="M80.8548 74.32L73.2859 72.8818C73.2859 72.8818 73.0986 75.4206 72.8854 77.0243C72.6454 78.8287 73.9248 80.4698 75.7228 80.7534L77.0662 80.9652C78.7825 81.2359 80.4229 80.074 80.6109 78.3467C80.7811 76.7823 80.8548 74.32 80.8548 74.32Z" fill="rgba(0,0,0,1)" stroke-width="2px"></path><path class="fillCls7" d="M87.5963 48.8306C87.5963 47.0036 86.0439 45.2823 86.0439 45.2823C86.0439 45.2823 81.1864 50.3051 76.7295 51.4919C71.9328 52.7692 64.0885 50.1613 64.0885 50.1613C64.0885 50.1613 63.7048 52.0664 64.0885 53.4878C64.3844 54.5839 70.9653 56.4109 77.3948 54.5967C82.9409 53.0317 87.5963 50.1613 87.5963 48.8306Z" fill="rgba(2,2,2,1)" stroke-width="2px"></path><path class="fillCls4" d="M87.1523 38.6291C86.8248 31.5232 80.7309 26.1217 73.6243 26.4317C65.6405 26.7798 61.205 31.7541 61.2051 39.5162C61.2051 47.2782 62.0922 55.2876 77.1726 51.7136C84.808 49.904 87.8176 46.1694 87.1523 38.6291Z" fill="rgba(0,0,0,1)" stroke-width="2px"></path><path class="fillCls5" d="M73.1825 48.8304C78.7268 47.9064 77.3962 41.0684 77.3962 41.0684C77.173 40.4172 73.1825 40.1816 67.7491 38.5181C62.3157 36.8546 62.0926 34.8592 61.6504 35.0806C60.9837 38.1857 60.0974 41.9555 61.6504 45.9474C63.2603 48.1651 67.6382 49.7545 73.1825 48.8304Z" fill="#3CC099" stroke-width="2px"></path><path class="fillCls6" d="M74.0848 41.6223L69.1798 40.3143C68.3371 40.0896 67.6875 40.9455 68.2177 41.638C69.1336 42.8341 70.4544 44.151 71.8354 44.1607C72.6746 44.1665 73.6308 43.6903 74.3985 43.1932C75.0602 42.7647 74.8465 41.8255 74.0848 41.6223Z" fill="#E1FFF6" stroke-width="2px"></path><path class="fillCls1" d="M28.5281 18.9539C29.1562 17.3053 31.4559 17.2182 32.2069 18.8147L34.2575 23.1743C34.5775 23.8546 35.2521 24.298 36.0036 24.322L40.4819 24.4647C42.2599 24.5214 43.0847 26.6971 41.7909 27.9182L38.1385 31.3653C37.58 31.8925 37.3727 32.6929 37.605 33.4249L38.7471 37.023C39.3024 38.7726 37.4048 40.2835 35.8241 39.3504L32.142 37.1767C31.4678 36.7787 30.6234 36.8107 29.9812 37.2585L26.474 39.7044C24.9684 40.7543 22.962 39.3912 23.3834 37.6047L24.2501 33.9305C24.4265 33.183 24.1592 32.4006 23.5624 31.9172L19.6598 28.7561C18.2775 27.6364 18.9353 25.4045 20.704 25.2135L25.1587 24.7326C25.9062 24.6519 26.5453 24.1587 26.813 23.4561L28.5281 18.9539Z" fill="#FFB95B" stroke-width="2px"></path><path class="fillCls2" d="M35.9251 31.7417C36.3686 31.7417 37.921 33.1167 37.921 33.1167L41.6911 39.5037C41.6911 39.5037 38.0746 38.0353 36.5904 36.1771C35.96 35.388 35.3607 34.9644 35.2598 33.9594C35.1694 33.0597 35.4815 31.7417 35.9251 31.7417Z" fill="rgba(105,105,105,1)" stroke-width="2px"></path></g><path class="astronaut1-right-star fill1" d="M137.023 76.0338C137.375 75.7671 137.875 76.0556 137.821 76.4944L137.581 78.4136C137.558 78.6005 137.642 78.7846 137.798 78.8899L139.314 79.9134C139.682 80.1618 139.568 80.7307 139.133 80.8181L137.158 81.2145C136.97 81.2521 136.821 81.3933 136.772 81.5783L136.355 83.1733C136.239 83.6176 135.636 83.6835 135.427 83.2748L134.609 81.6784C134.519 81.5033 134.335 81.3971 134.139 81.407L132.348 81.4971C131.889 81.5202 131.644 80.9647 131.971 80.642L133.144 79.4835C133.28 79.3491 133.328 79.1489 133.266 78.9678L132.622 77.059C132.48 76.6384 132.916 76.2551 133.315 76.4496L134.959 77.2511C135.129 77.3336 135.33 77.314 135.48 77.2005L137.023 76.0338Z" fill="#fff" stroke-width="2px" style={{"animation-duration": "1.3s"}}></path><path class="astronaut1-left-star fill1" d="M17.0082 104.603C17.0797 104.167 17.6407 104.031 17.9036 104.387L18.3696 105.017C18.4816 105.168 18.6691 105.244 18.8547 105.213L19.555 105.095C19.9928 105.021 20.3024 105.512 20.0473 105.875L19.5698 106.555C19.4599 106.712 19.4489 106.917 19.5414 107.084L19.8074 107.566C20.0296 107.967 19.638 108.431 19.2046 108.279L18.5983 108.067C18.4126 108.002 18.2061 108.052 18.0706 108.195L17.628 108.66C17.3117 108.993 16.7516 108.759 16.7658 108.3L16.7828 107.751C16.7887 107.56 16.6851 107.382 16.5159 107.293L15.7805 106.906C15.3876 106.699 15.439 106.121 15.8622 105.987L16.5391 105.772C16.7185 105.715 16.8508 105.562 16.8813 105.376L17.0082 104.603Z" fill="#fff" stroke-width="2px" style={{"animation-duration": "1.3s"}}></path><g class="astronaut1-right-rock" style={{"animation-duration": "1.3s"}}><path class="fillCls10" d="M121.972 55.9148C121.259 57.8776 122.872 60.4682 124.093 62.0452C124.734 62.8734 125.917 62.9318 126.681 62.2157C127.615 61.3398 128.804 60.1459 129.513 59.1305C129.73 58.819 129.943 58.4658 130.147 58.0937C131.306 55.9769 129.838 53.477 127.425 53.5169C125.113 53.555 122.647 54.0598 121.972 55.9148Z" fill="#56CCA9" stroke-width="2px"></path><path class="fillCls11" d="M124.19 61.0594V62.1243C124.19 62.1243 123.464 61.2814 123.082 60.6828C122.539 59.834 121.973 58.3542 121.973 58.3542C123.262 58.6121 124.19 59.7444 124.19 61.0594Z" fill="#269473" stroke-width="2px"></path><circle class="fillCls11" cx="126.85" cy="56.1365" r="1.33063" fill="#269473" stroke-width="2px"></circle></g><ellipse class="astronaut1-right-spec fill10" cx="118.163" cy="35.4177" rx="3.32657" ry="1.99594" transform="rotate(15 118.163 35.4177)" fill="#56CCA9" style={{"animation-duration": "1.3s"}}></ellipse><ellipse class="astronaut1-bottom-spec fill10" cx="107.429" cy="119.523" rx="5.17097" ry="1.99594" transform="rotate(-15 107.429 119.523)" fill="#56CCA9" style={{"animation-duration": "1.3s"}}></ellipse><g class="astronaut1-left-rock fill1" style={{"animation-duration": "1.3s"}}><path class="fillCls10" d="M10.3687 77.6504C9.53914 79.3657 10.3687 82.5294 10.3687 82.5294C10.3687 82.5294 14.5092 84.6284 17.3545 85.4124C20.3478 86.2372 25.2274 86.5212 25.2274 86.5212C25.2274 86.5212 28.2197 83.3557 27.8886 80.977C27.7034 79.6467 21.4361 75.2403 18.1307 74.5456C14.4862 73.7797 11.1193 76.0984 10.3687 77.6504Z" fill="#56CCA9" stroke-width="2px"></path><path class="fillCls11" d="M14.5805 81.8641C13.2594 81.5037 11.2539 82.973 11.2539 82.973C11.2539 82.973 13.3866 83.9928 14.8022 84.5254C16.3546 85.1907 17.4635 85.4125 17.4635 85.4125C17.4635 85.4125 17.02 82.5297 14.5805 81.8641Z" fill="#269473" stroke-width="2px"></path><ellipse class="fillCls11" cx="22.6611" cy="81.0543" rx="2.97361" ry="1.69408" transform="rotate(30.2019 22.6611 81.0543)" fill="#269473"></ellipse></g>
                    </svg>
                     <b style={{'fontSize': '1.5rem'}}>Engineering</b>
                </h5>
            </div>
            

            <div className="engine_portfolios">

                <div className="engine">
                    <div className="engine_project">
                        <div className="project_img engine1">
                        </div>
                        <div className="project_des">
                            <h5>Control System & Robotics</h5>
                            <h2>SCARA Robotic Arm</h2>
                            <p>
                                Designed a Control System of SCARA Robotic Arm with 3 DOF that moves in a 2D plane to grab faulty objects and releases them into a near bin.
                            </p>
                            <div className="project_tags">
                                <p>PID Controller</p>
                                <p>Matlab Simulink</p>
                                <p>SimulationX</p>
                                <p>C/C++</p>
                                <p>Microcontroller</p>
                            </div>
                            <div className="project_buttons">
                                <a href={reportPDF} download="SCARArobot_control.pdf">
                                    <button className="more_button">Download Report</button>
                                </a>
                            </div>

                        </div>
                    </div>
                </div> 

                <div className="engine">
                    <div className="engine_project">
                        <div className="project_img engine2">
                        </div>
                        <div className="project_des">
                            <h5>Image Processing  &  Machine Learning </h5>
                            <h2>Image-based Plant Diseases Detection</h2>
                            <p>Crop disease detection and classification system using
                                2 independent Machine Learning models with image processing methods of K-Mean Clustering and Histogram of Oriented Gradient (HOG).</p>
                            <div className="project_tags">
                                <p>Python</p>
                                <p>Tensorflow</p>
                                <p>CNN</p>
                                <p>K-Mean Clustering</p>
                                <p>HOG</p>
                            </div>
                            <div className="project_buttons">
                                <Link to="/projects/plantdetection">
                                    <button className="more_button">View Project</button>
                                </Link>           
                            </div>
                        </div>
                    </div>
                </div> 

                <div className="engine">
                    <div className="engine_project">
                        <div className="project_img engine3">
                        </div>
                        <div className="project_des">
                            <h5>Electronic Devices & Circuits</h5>
                            <h2>Recycle Robot</h2>
                            <p>Designed and manufactured a functional, sustainable and affordable robot that disposes recycle materials into specific bins</p>
                            <div className="project_tags">
                                <p>Microcontroller</p>
                                <p>C/C++</p>
                                <p>Electronics</p>
                            </div>
                            <div className="project_buttons">
                                <Link to="/projects/recyclerobot">
                                    <button className="more_button">View Project</button>
                                </Link>   
                            </div>
                        </div>
                    </div>
                </div>        


                <div className="other_engine">
                    <h5 className="other_title">Other projects:</h5>

                    <Swiper slidesPerView={1} 
                            spaceBetween={5}
                            freeMode={true}
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
                            <div className="engine">
                                <div className="engine_project">
                                    <div className="project_img engine4">
                                    </div>
                                    <div className="project_des">
                                        <h5>Digital System Design</h5>
                                        <h2>Flash Memory Reader</h2>
                                        <div className="project_tags">
                                            <p>System Verilog</p>
                                            <p>FPGA</p>
                                            <p>DE1-SoC</p>
                                            <p>CODEC</p>
                                        </div>
                                        <div className="project_buttons">
                                            <a href="https://github.com/izzul210/flash_memory_reader" 
                                                target="_blank" 
                                                rel="noreferrer">
                                                <button className="more_button">
                                                View on GitHub
                                                </button>               
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>  
                        </SwiperSlide>
                        
                        <SwiperSlide>
                            <div className="engine">
                                <div className="engine_project">
                                    <div className="project_img engine5">
                                    </div>
                                    <div className="project_des">
                                        <h5>Microcomputers</h5>
                                        <h2>Data Cache Performance</h2>
                                        <div className="project_tags">
                                            <p>Assembly</p>
                                            <p>Cortex-A9</p>
                                            <p>DE1-SoC</p>
                                        </div>
                                        <div className="project_buttons">
                                            <a href="https://github.com/izzul210/data_cache_performance" 
                                                target="_blank" 
                                                rel="noreferrer">
                                                <button className="more_button">
                                                View on GitHub
                                                </button>               
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        
                        <SwiperSlide>
                            <div className="engine">
                                <div className="engine_project">
                                    <div className="project_img engine6"></div>
                                    <div className="project_des">
                                        <h5>Digital System Design</h5>
                                        <h2>ARC4 Decryption</h2>
                                        <div className="project_tags">
                                            <p>System Verilog</p>
                                            <p>KSA Algorithm</p>
                                            <p>DE1-SoC</p>
                                        </div>
                                        <div className="project_buttons">
                                            <a href="https://github.com/izzul210/arc4decryption"  
                                                    target="_blank" 
                                                    rel="noreferrer">
                                                <button className="more_button">
                                                    View on GitHub
                                                </button>               
                                            </a>
                                        </div>
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



