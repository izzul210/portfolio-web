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
                        <hr size="3" width="80%" color="#68273d"></hr>
                        <h3>PORTFOLIO</h3>
                        <hr size="3" width="80%" color="#68273d"></hr>
                    </div>

                    <Webdev />
                    <hr size="3" width="80%" color="#68273d" style={{"margin":"auto"}}></hr>
                    <Engineering />                    
                </div>
            </Fragment>
        )
    }
}

export default Portfolio;