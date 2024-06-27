import React from 'react';
import image from './hassan_spain.jpg';
import { Link } from "react-router-dom";
import resume from './resume.pdf';

export const Side =() => {
  return (
    <div>
        <div className='side'>
                <div className="component">
                    <img className="spain" src={image} alt='Hassan in Spain'/>
                    <p className="info">Email me at:<br></br>hhalzerjawi@gmail.com<br></br>hassan@alzerjawi.com<br></br>LinkedIn:<br></br><a href="https://www.linkedin.com/in/zerjawi/">Hassan Al Zerjawi</a></p>
                    <div class='r-button'>
                        <Link id="button1" className="btn btn-dark btn-lg" rel='noopener noreferrer' target="_blank" to={resume} role="button" ><p id="text-resume">Download Resume</p></Link>
                    </div>
                </div>
                
            </div>
    </div>
  )
}


