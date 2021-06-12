import {React, useState} from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';

/** Components **/
import Home from './components/layout/home/Home';
import About from './components/layout/about/About';
import Projects from './components/layout/projects/Projects';
import Blog from './components/layout/blog/Blog';
import Artworks from './components/layout/artworks/Artworks';

import PlantDetection from './components/layout/projects/plant_detection/PlantDetection';
import RecycleRobot from './components/layout/projects/recycle_robot/RecycleRobot';

import Topbar from './components/layout/topbar/Topbar';
import Menu from './components/layout/topbar/Menu';

/** CSS **/
import './App.scss';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/> 
      <div className="sections">
        <Route exact path="/" component={Home} />
        <Switch>
          <Route exact path="/about" component={About} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/blog" component={Blog} />
          <Route exact path="/artworks" component={Artworks} />
          <Route exact path="/projects/plantdetection" component={PlantDetection} />
          <Route exact path="/projects/recyclerobot" component={RecycleRobot} />
        </Switch>
      </div>
    </div>

  );
}

export default withRouter(App);


/*
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

      

    </Fragment>


*/
