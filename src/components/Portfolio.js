import React from "react";
import image from './hassan_spain.jpg';
import construction from './construction.png';
import { Link } from "react-router-dom";
import resume from './resume.pdf';

export const Portfolio = () => {
    return (
        <div className="portfolio">
            <div className='main'>
                <p>Under Construction</p>
                <img src={construction} alt='under construction'/>
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