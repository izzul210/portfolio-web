import React from 'react';
import { GiRobotGrab } from 'react-icons/gi'; 


export default function Engineering() {
    return (
        <div className="portfolio_engine">

            <div className="title">
                <h5><GiRobotGrab/> Engineering</h5>
            </div>

            <div className="engine_portfolios">

                <div className="engine_1">
                    <div className="engine_project">
                        <div className="project_img">

                        </div>
                        <div className="project_des">
                            <h5>Control System</h5>
                            <h5>SCARA Robotic Arm</h5>
                            <p>Created a system that reads sound samples from an off-chip flash memory 
                                and store them to the on-chip memory using a state machine.</p>
                            <div className="project_tags">
                                <p>ReactJS</p>
                                <p>Redux</p>
                                <p>NodeJS</p>
                                <p>MongoDB</p>
                            </div>

                        </div>
                    </div>
                </div> 

                <div className="engine_1">
                    <div className="engine_project">
                        <div className="project_img">

                        </div>
                        <div className="project_des">
                            <h4>Recycle Robot</h4>
                        </div>
                    </div>
                </div> 

                <div className="engine_1">
                    <div className="engine_project">
                        <div className="project_img">

                        </div>
                        <div className="project_des">
                            <h4>Recycle Robot</h4>
                        </div>
                    </div>
                </div>         


            </div>
            
        </div>
    )
}
