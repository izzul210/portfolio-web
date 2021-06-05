import React, { Component, Fragment } from 'react';

import Webdev from './Webdev';
import Engineering from './Engineering';

import './Portfolio.scss';

class Portfolio extends Component{
    render(){
        return(
            <Fragment>
                <div className="portfolio_div">
                    <div className="portfolio_title">
                        <hr size="4" width="100%" color="#68273d"></hr>
                        <h3> PORTFOLIO</h3>
                        <hr size="4" width="100%" color="#68273d"></hr>
                    </div>

                    <Webdev />
                    <Engineering />
                    
                </div>
            </Fragment>
        )
    }
}

export default Portfolio;