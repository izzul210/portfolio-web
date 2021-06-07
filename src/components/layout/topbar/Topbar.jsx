import React from 'react';
import './Topbar.scss';
import { Link } from 'react-router-dom';

import webLogo from '../../../assets/logo.png';


export default function Topbar({menuOpen, setMenuOpen}) {
    return (
        <div className={`topbar ${menuOpen && "active"}`}>
            <div className="wrapper">
                <div className="left">
                       <Link to="/">
                           <img src={webLogo} alt=""></img>
                           <h4>IZZUL SYAHMI</h4>
                       </Link>
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

