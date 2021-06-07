import React, { Component, Fragment } from 'react';

import './Home.scss';

import Header from './Header';
import Portfolio from './portfolio/Portfolio';
import Contact from './Contact';

class Home extends Component{
    render(){
        return(
          <Fragment >
            <Header />
            <Portfolio />
            <Contact />
          </Fragment> 
        )
    }
}

export default Home;