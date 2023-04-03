import React from "react";
import image from './hassan_spain.jpg';
import swiss from './swisspro.png';
import pi from './pi.png';
import alturath from './Al-Turath.png';
import { Link } from "react-router-dom";
import resume from './resume.pdf';

export const Experience = () => {
    return (
        <div className="experience">
            <div className='main'>
                <h1 data-aos="flip-down" data-aos-duration="1000" data-aos-delay="100">Experience</h1>
                <div className="container1" data-aos="zoom-out" data-aos-duration="1000" data-aos-delay="100">
                    <div className="ex1">
                        <img className="logo pic2" src={swiss} alt='UCD logo'/>

                    </div>
                    <div className="ex2">
                        <img className="logo" src={pi} alt='MSU logo'/>

                    </div>
                    <div className="ex3">
                        <img className="logo" src={alturath} alt='MSU logo'/>
                    </div>
                </div>
                <div className="container2" data-aos="flip-left" data-aos-duration="1000" data-aos-delay="100">
                    <div className="ex1">
                        
                        <p>
                            Swisspro AG<br></br>Zurich, Switzerland<br></br>Electrician Apprentice<br></br>May 2010 - May 2011
                        </p>
                    </div>
                    <div className="ex2">
                        
                        <p>
                            Self-employed<br></br>Denver, USA<br></br>Mathematics Tutor<br></br>Jun 2016 - Jul 2021
                        </p>
                    </div>
                    <div className="ex3">
                        
                        <p>
                            Al-Turath University College<br></br>Baghdad, Iraq<br></br>International Relations Officer<br></br>Jan 2023 - Present 2012
                        </p>
                    </div>
                </div>
                <div className="container3">
                     <div className="Job1">
                        <h1 data-aos="flip-down" data-aos-duration="1000" data-aos-delay="100">Swisspro AG - Electrician Apprentice</h1>
                        <ul data-aos="zoom-in-right" data-aos-duration="1000" data-aos-delay="100">
                            <li>Helped run wiring, conduit, and other electrical components.
</li>
                            <li>Assisted with the installation of lighting fixtures, outlets, and switches.</li>
                            <li>Helped troubleshoot and diagnose electrical problems.
</li>
                            <li>Learned how to read and interpret blueprints, diagrams, and schematics.</li>
                            <li>Observed safety procedures and regulations while working.
</li>
                        </ul>
                    </div>
                    <div className="Job2">
                        <h1 data-aos="flip-down" data-aos-duration="1000" data-aos-delay="100">Self-employed - Mathematics Tutor</h1>
                        <ul data-aos="zoom-in-right" data-aos-duration="1000" data-aos-delay="100">
                            <li>Helped students understand mathematical concepts and principles.</li>
                            <li>Provided one-on-one instruction to students who are struggling with math.</li>
                            <li>Review and provide feedback on the student's homework, assignments, and exams.</li>
                            <li>Created customized lesson plans based on the student’s needs and level of understanding.</li>
                            <li>Assisted students with homework, assignments, and test preparation.</li>
                        </ul>
                    </div>
                    <div className="Job3">
                        <h1 data-aos="flip-down" data-aos-duration="1000" data-aos-delay="100">Al-Turath University College - International Relations Officer</h1>
                        <ul data-aos="zoom-in-right" data-aos-duration="1000" data-aos-delay="100">
                            <li>Facilitated international partnerships and collaborations with other universities and organizations.
</li>
                            <li>Coordinated study abroad programs and exchange programs for students and faculty.
</li>
                            <li>Advised students on international academic programs, including scholarships and grants.</li>
                            <li>Organized international conferences, workshops, and cultural events.
</li>
                            <li>Stayed up-to-date with international education policies and regulations.
</li>
                        </ul>
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