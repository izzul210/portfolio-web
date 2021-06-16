import React, { Component, Fragment } from 'react';
import Header from './Header';
import Portfolio from './portfolio/Portfolio';
import Contact from './Contact';

class Home extends Component{
    render(){
        return(
          <div>
            <Header />
            <Portfolio />
            <Contact />
          </div> 
        )
    }
}

export default Home;