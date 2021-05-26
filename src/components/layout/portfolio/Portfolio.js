import React, { Component, Fragment } from 'react';

import './Portfolio.css';

import headerImage from '../../../assets/header_img.png';

class Portfolio extends Component{
    render(){
        return(
            <Fragment>
                <div className="header_div">
                    <div className="header_text">
                        <div className="header_title">
                            <h1>Hi, I'm Izzul Syahmi</h1>
                            <h2>Web Development</h2>
                        </div>
                        <div className="header_about">
                            <p>I'm a 24 years old recent Electrical Engineering graduate from UBC, Vancouver.
                                This website showcase all of my projects and portfolios on <b>Web Development</b>, <b>Machine Learning</b>, and 
                                 <b> Engineering</b>. 
                            </p>
                        </div>
                        <div className="header_button">
                            <button>Download CV</button>
                        </div>
                        
                    </div>
                </div>

                <div className="portfolio_content">
                    <img src={headerImage} alt=""></img>
                </div>
            </Fragment>
        )
    }
}

export default Portfolio;