import React, { Component, Fragment } from 'react';
import { init } from 'ityped';

import headerImage from '../../../assets/default_header.png';


class Header extends Component{
    componentDidMount(){
        const myElement = document.querySelector('#myElement')
        init(myElement, { showCursor: true, strings: ['Web Development', 'Electrical Engineering' ] })
      }

    render(){
        return(
            <Fragment>
                <div className="header_div">
                    <div className="header_text">
                        <div className="header_title">
                            <h1>Hi, I'm Izzul Syahmi</h1>
                            <h2><span id="myElement"></span></h2>
                        </div>
                        <div className="header_about">
                            <p>I'm a 24 years old recent Electrical Engineering graduate from UBC, Vancouver.
                                This website showcase all of my projects and portfolios on <b>Web Development</b>, 
                                <b> Engineering</b>, and <b> Machine Learning</b>. 
                            </p>
                        </div>
                        <div className="header_button">
                            <button>Download CV</button>
                        </div>
                        
                    </div>
                    <div className="header_img">
                        <div className="img_container">
                            <img src={headerImage} alt=""></img>
                        </div>
                    </div>
                </div>

                <div className="portfolio_content">
                    <h1>Portfolio Content</h1>
                </div>
            </Fragment>
        )
    }
}

export default Header;