import React from 'react';
import './Topbar.scss';
import { Nav, Navbar } from 'react-bootstrap';
import { Route, Switch, Link, withRouter } from 'react-router-dom';

import webLogo from '../../../assets/web_logo.png';


export default function Topbar({menuOpen, setMenuOpen}) {
    return (
        <div className={`topbar ${menuOpen && "active"}`}>
            <div className="wrapper">
                <div className="left">
                       <Link to="/"><img src={webLogo} alt=""></img></Link>
                </div>
                <div className="right">
                  <div className="hambackground">
                    <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                            <span className="line1"></span>
                            <span className="line2"></span>
                            <span className="line3"></span>
                        </div>
                  </div>  
                </div>
            </div>
        </div>
    )
}


/*
<Navbar expand="lg" collapseOnSelect bsPrefix="navbar">
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


*/
