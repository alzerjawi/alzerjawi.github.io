import React from "react";
import image from './hassan_spain.jpg';
import MSUImage from './MSU.png';
import WestminsterImage from './westminster.png';
import UCDImage from './cu.png';

export const Education = () => {
    return (
        <div className="education">
            <div className='main'>
                <h1>Education</h1>
                <div className="container1">
                    <div className="ex1">
                        <img className="logo" src={UCDImage} alt='UCD logo'/>

                    </div>
                    <div className="ex2">
                        <img className="logo pic1" src={MSUImage} alt='MSU logo'/>

                    </div>
                    <div className="ex3">
                        <img className="logo pic3" src={WestminsterImage} alt='MSU logo'/>
                    </div>
                </div>
                <div className="container2">
                    <div className="ex1">
                        
                        <p>
                            University of Colorado Denver<br></br>2015-2018<br></br>(AS Degree)
                        </p>
                    </div>
                    <div className="ex2">
                        
                        <p>
                            Metropolitan State University Denver<br></br>2019-2021<br></br>(BSc in Applied Mathematics)
                        </p>
                    </div>
                    <div className="ex3">
                        
                        <p>
                            University of Westminster London<br></br>2021-2023<br></br>(MSc in Software Engineering)
                        </p>
                    </div>
                </div>
                <div className="container3">
                     <div className="Degree1">
                        <h1>Software Engineering Courses</h1>
                        <ul>
                            <li>Data Repositories Principles and Tools</li>
                            <li>Data Visualisation and Dashboarding</li>
                            <li>Mobile Application Development</li>
                            <li>Advanced Software Design</li>
                            <li>Data Structures and Algorithms</li>
                            <li>Object Oriented Programming</li>
                            <li>Software Development Environments</li>
                            <li>Software Development Project</li>
                        </ul>
                    </div>
                    
                </div>
                <div className="container4">
                    <div className="Degree2">
                        <h1>Applied Mathematics Courses</h1>
                        <ul>
                            <li>Calculus I</li>
                            <li>Calculus II</li>
                            <li>Calculus III</li>
                            <li>Introduction to Mathematical Proofs</li>
                            <li>Computer Science 1(Java)</li>
                            <li>Linear Algebra</li>
                            <li>Probability and Statistics</li>
                            <li>Differential Equations</li>
                            <li>Statistical Methods</li>
                            <li>Numerical Analysis I</li>
                            <li>Partial Differential Equations</li>
                        </ul>
                    </div>
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