import React from 'react';
import './Menu.scss';
import { Link } from 'react-router-dom';


export default function Menu({menuOpen, setMenuOpen}) {
    return (
        <div className={`menu ${menuOpen && "active"}`}>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/projects">Projects</Link>
                </li>
                <li>
                    <Link to="/artworks">Artworks</Link>
                </li>
                <li>
                    <Link to="/blog">Blog</Link>
                </li>
            </ul>
        </div>
    )
}
