import React from 'react';
import './Menu.scss';

export default function Menu({menuOpen, setMenuOpen}) {
    return (
        <div className={`menu ${menuOpen && "active"}`}>
            <ul>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="#webdev">Web Dev</a>
                </li>
                <li>
                    <a href="#engineering">Engineering</a>
                </li>
                <li>
                    <a href="#contact">Contact</a>
                </li>
            </ul>
        </div>
    )
}
