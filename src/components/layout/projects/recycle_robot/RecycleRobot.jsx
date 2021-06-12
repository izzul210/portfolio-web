import React, {Fragment} from 'react';
import './RecycleRobot.scss';

import recycle1 from '../../../../assets/projects/recycle/recycle1.png';
import recycle2 from '../../../../assets/projects/recycle/recycle2.png';
import designchanges from '../../../../assets/projects/recycle/designchanges.png';
import recycle3 from '../../../../assets/projects/recycle/recycle3.png';
import recycle4 from '../../../../assets/projects/recycle/recycle4.png';
import recycle5 from '../../../../assets/projects/recycle/recycle5.png';
import recycle6 from '../../../../assets/projects/recycle/recycle6.png';
import recycle7 from '../../../../assets/projects/recycle/recycle7.png';

import disposingobjects from '../../../../assets/projects/recycle/disposingobjects.mp4';
import microbalancing from '../../../../assets/projects/recycle/microbalancing.mp4';
import sharpturn from '../../../../assets/projects/recycle/sharpturn.mp4';
import takeinventory from '../../../../assets/projects/recycle/takeinventory.mp4';



export default function RecycleRobot() {
    return (
        <Fragment>
            <div className="recycle_header">
                <div className="recycle_title">
                    <h1>The Recycle Robot</h1>
                </div>
            </div>
            <div className="recycle_content">
                <div className="content_1">
                    <h2 className="content_title">
                        Design
                    </h2>
                    <div className="content_points">
                        <div className="img_div">
                            <img src={recycle1} alt=""></img>
                        </div>
                        <div className="img_div">
                            <img src={recycle2} alt=""></img>
                        </div>
                    </div>
                </div>

                <hr size="3" width="90%" color="#68273d" style={{"margin":"auto"}}></hr>

                <div className="content_2">
                    <h2 className="content_title">
                        Design Changes
                    </h2>
                    <div className="content_points">
                        <div className="img_div">
                            <img src={designchanges} alt=""></img>
                        </div>
                    </div>
                </div>

                <hr size="3" width="90%" color="#68273d" style={{"margin":"auto"}}></hr>

                <div className="content_3">
                    <h2 className="content_title">
                        Disposing Objects
                    </h2>
                    <div className="content_points">
                        <div className="img_div">
                            <img src={recycle3} alt=""></img>
                        </div>
                        <video className="vid_div" controls>
                            <source src={disposingobjects} type="video/mp4"></source>
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>

                <hr size="3" width="90%" color="#68273d" style={{"margin":"auto"}}></hr>

                <div className="content_4">
                    <h2 className="content_title">
                        Features
                        <h4 style={{'marginTop': '1rem', 'fontWeight': '700'}}>Take Invetory</h4>
                    </h2>
                    <div className="content_points">
                        
                        <div className="img_div">
                            <img src={recycle4} alt=""></img>
                        </div>
                        <video className="vid_div" controls>
                            <source src={takeinventory} type="video/mp4"></source>
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>

                <div className="content_5">
                    <h2 className="content_title">
                        <h4 style={{'fontWeight': '700'}}>Sharp Turn at 90 degree angle</h4>
                    </h2>
                    <div className="content_points">
                        <video className="vid_div" controls>
                            <source src={sharpturn} type="video/mp4"></source>
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>

                <div className="content_6">
                    <h2 className="content_title">
                        <h4 style={{'fontWeight': '700'}}>Microbalancing</h4>
                    </h2>
                    <div className="content_points">
                        <video className="vid_div" controls>
                            <source src={microbalancing} type="video/mp4"></source>
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>

                <hr size="3" width="90%" color="#68273d" style={{"margin":"auto"}}></hr>

                <div className="content_7">
                    <h2 className="content_title">
                        CO2 Emission
                    </h2>
                    <div className="content_points">
                        <div className="img_div">
                            <img src={recycle5} alt=""></img>
                        </div>
                    </div>
                </div>

                <hr size="3" width="90%" color="#68273d" style={{"margin":"auto"}}></hr>

                <div className="content_8">
                    <h2 className="content_title">
                        Cost
                        <h4 style={{'marginTop': '1rem', 'fontWeight': '700'}}>Product Cost</h4>
                    </h2>
                    <div className="content_points">
                        <div className="img_div">
                            <img src={recycle6} alt=""></img>
                        </div>
                    </div>
                </div>

                <div className="content_9">
                    <h2 className="content_title">
                        <h4 style={{'fontWeight': '700'}}>Maintenace Cost</h4>
                    </h2>
                    <div className="content_points">
                        <div className="img_div">
                            <img src={recycle7} alt=""></img>
                        </div>
                    </div>
                </div>

                <div style={{'display':'flex', 'flexDirection':'row', 'margin':'2rem 1rem 0.5rem 1rem', 'opacity':'0.7'}}>
                    Done by Group 4 of ELEC 391
                    <ul>
                        <li>Muhamad Izzul Syahmi</li>
                        <li>Nick Sciarretta</li>
                        <li>Arshdeep Sandhu</li>
                        <li>Jaspal Basra</li>
                    </ul>    
                </div>

            </div>
            
        </Fragment>
    )
}
