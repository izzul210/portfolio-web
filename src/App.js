import React, {Fragment } from 'react';
import { Route, Switch, Link, withRouter } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';

/** Components **/
import Portfolio from './components/layout/portfolio/Portfolio';
import About from './components/layout/about/About';
import Projects from './components/layout/projects/Projects';
import Blog from './components/layout/blog/Blog';
import Artworks from './components/layout/artworks/Artworks';

/** CSS **/
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import './Navbar.css';

/** PNG files  **/
import webLogo from './assets/web_logo.png';


function App() {
  return (
    <Fragment >
      <Navbar expand="lg" collapseOnSelect>
        <Navbar.Brand>
          <Link to="/"><img src={webLogo} alt=""></img></Link>
        </Navbar.Brand>

        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav>
            <Link to="/">Home</Link>
          </Nav> 
          <Nav>
            <Link to="/about">About</Link>
          </Nav> 
          <Nav>
            <Link to="/projects">Projects</Link>
          </Nav> 
          <Nav>
            <Link to="/blog">Blog</Link>
          </Nav> 
          <Nav>
            <Link to="/artworks">Artworks</Link>
          </Nav> 
        </Navbar.Collapse>
      </Navbar>

      <Route exact path="/" component={Portfolio} />
      <Switch>
        <Route exact path="/about" component={About} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/blog" component={Blog} />
        <Route exact path="/artworks" component={Artworks} />
      </Switch>

    </Fragment>
  );
}

export default withRouter(App);
