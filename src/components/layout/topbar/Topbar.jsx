import React from 'react';
import './Topbar.scss';
import { Nav, Navbar } from 'react-bootstrap';
import { Route, Switch, Link, withRouter } from 'react-router-dom';

import webLogo from '../../../assets/web_logo.png';


export default function Topbar() {
    return (
        <div className="topbar">
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
        </div>
    )
}
