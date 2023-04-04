import React from "react";
import image from './hassan_spain.jpg';
import { Link } from "react-router-dom";
import resume from './resume.pdf';
import portfolio from './Portfolio.png';
import VCS from './VCS.png';

export const Portfolio = () => {
    return (
        <div className="portfolio">
            <div className='main'>
                <h1>Portfolio</h1>
                <div className="port1">
                    <img className="port-img" src={portfolio} alt='portfolio'/>
                    <div className="port-container">
                        <h1 className="port-title">Portfolio</h1>
                        <p className="port-desc">I used React, along with JavaScript, HTML, and CSS, to create my portfolio website. The website showcases my software development skills and includes information about my education, work experience, and technical skills. It was a project that allowed me to improve my web development abilities while also creating a platform to showcase my professional abilities.</p>
                        <a class="btn btn-dark btn-lg" href="https://github.com/alzerjawi/alzerjawi.github.io" rel='noopener noreferrer' target="_blank" role="button">GitHub Page</a>
                    </div>
                </div>
                <div className="port2">
                    <img className="port-img" src={VCS} alt='portfolio'/>
                    <div className="port-container">
                        <h1 className="port-title">Version Control System</h1>
                        <p className="port-desc">I developed a simple Version Control System (VCS) using Shell script with Bash. The VCS uses Git-like commands and allows users to commit changes, create branches, merge branches, and view commit history. The script uses basic file system manipulation commands to create and manage repositories. The VCS has proven to be useful for managing small-scale projects and learning the basics of version control.</p>
                        <a class="btn btn-dark btn-lg" href="https://github.com/alzerjawi/VersionControlSystem" rel='noopener noreferrer' target="_blank" role="button">GitHub Page</a>
                    </div>
                </div>
            </div>
            <div className='side'>
                <div className="component">
                    <img src={image} alt='Hassan in Spain'/>
                    <p className="info">Email me at:<br></br>halzerjawi21@gmail.com<br></br>hassan@alzerjawi.com<br></br>LinkedIn:<br></br><a href="https://www.linkedin.com/in/zerjawi/">Hassan Al Zerjawi</a></p>
                    <div class='r-button'>
                        <Link id="button1" className="btn btn-dark btn-lg" rel='noopener noreferrer' target="_blank" to={resume} role="button" ><p id="text-resume">Download Resume</p></Link>
                    </div>
                </div>
                
            </div>
        </div>  
    );
};