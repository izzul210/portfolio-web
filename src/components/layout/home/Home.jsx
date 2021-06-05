import React, { Component, Fragment } from 'react';

import './Home.scss';

import Header from './Header';
import Portfolio from './portfolio/Portfolio';

class Home extends Component{
    render(){
        return(
          <Fragment >
            <Header />
            <Portfolio />
          </Fragment> 
        )
    }
}

export default Home;