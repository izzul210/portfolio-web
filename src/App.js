import React, {Fragment, useEffect} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';

import Portfolio from './components/layout/portfolio/Portfolio';
import About from './components/layout/about/About';
import Artworks from './components/layout/artworks/Artworks';
import Projects from './components/layout/projects/Projects';


function App() {
  return (
    <div className="App">
      <Navbar expand="lg" collapseOnSelect>
        <Navbar.Brand>
          Logo
        </Navbar.Brand>

        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav>
            <NavDropdown>
              <NavDropdown.Item>Nav 1</NavDropdown.Item>
              <NavDropdown.Item>Nav 2</NavDropdown.Item>
              <NavDropdown.Item>Nav 3</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav.Link>About</Nav.Link>
          <Nav.Link>Projects</Nav.Link>
          <Nav.Link>Artworks</Nav.Link>
        </Navbar.Collapse>

      </Navbar>

      

    </div>
  );
}

export default App;
