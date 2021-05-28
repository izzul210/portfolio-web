import React, { Component, Fragment } from 'react';

import './Home.scss';

import Header from './Header';
import Portfolio from './Portfolio';

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