import './Navbar.css'
import React from "react";
import { Link } from 'react-router-dom';

export const Navbar = () => {
    return (
        <nav className="topnav">
            <Link to="/">Home</Link>
            <Link to="/education">Education</Link>
            <Link to="/experience">Experience</Link>
            <Link to="/portfolio">Portfolio</Link>
        </nav>
    )
};

