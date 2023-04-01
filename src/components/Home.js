import React from "react";
import image from './hassan_spain.jpg';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from "react-router-dom";

export const Home = () => {
    return (
        <div className="home">
            <div className='main'>
                <div class='para intro'>
                    <h1>Hello, my name is Hassan Al Zerjawi</h1>
                    <p>Welcome to my humble Portfolio Website. I am a current MSc Software Engineering student at the University of Westminster. My study mainly focuses on programming and big data. I completed BSc at Metropolitan State University of Denver. Where I completed applied Mathematics as my major and Economics as my minor.</p>
                </div>
                <div className="me">
                    <h1>About Me</h1>
                    <div className="me1">
                        
                        <p>Welcome to my humble Portfolio Website. I am a current MSc Software Engineering student at the University of Westminster. My study mainly focuses on programming and big data. I completed BSc at Metropolitan State University of Denver. Where I completed applied Mathematics as my major and Economics as my minor. Welcome to my humble Portfolio Website. I am a current MSc Software Engineering student at the University of Westminster. My study mainly focuses on programming and big data. I completed BSc at Metropolitan State University of Denver. Where I completed applied Mathematics as my major and Economics as my minor. Welcome to my humble Portfolio Website. I am a current MSc Software Engineering student at the University of Westminster. My study mainly focuses on programming and big data. I completed BSc at Metropolitan State University of Denver. Where I completed applied Mathematics as my major and Economics as my minor.<br></br><br></br>Hobbies:</p>
                        <ul>
                            <li>Football</li>
                            <li>Reading</li>
                            <li>Coding</li>
                            <li>Gaming</li>
                        </ul>
                    </div>
                </div>

                <Link class="btn btn-dark btn-lg" to="/portfolio" role="button">Click for Portfolio</Link>

                <div className="skills">
                    <h1>Skills</h1>
                    
                </div>

                
            </div>
            <div className='side'>
                <div className="component">
                    <img src={image} alt='Hassan in Spain'/>
                    <p className="info">Email me at:<br></br>halzerjawi21@gmail.com<br></br>hassan@alzerjawi.com</p>
                </div>
                
            </div>
        </div>  
    );
};