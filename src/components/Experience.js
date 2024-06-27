import React from "react";
<<<<<<< HEAD
import image from './hassan_spain.jpg';
import swiss from './swisspro.png';
import pi from './pi.png';
import alturath from './Al-Turath.png';
import { Link } from "react-router-dom";
import resume from './resume.pdf';
=======
import swiss from './swisspro.png';
import Ishik from './file.png';
import alturath from './Al-Turath.png';
import MSUImage from './MSU.png';
import { Side } from "./Side";
import { Link } from "react-scroll";
>>>>>>> 908902e (Made changes)

export const Experience = () => {
    return (
        <div className="experience">
            <div className='main'>
                <h1 data-aos="flip-down" data-aos-duration="1000" data-aos-delay="100">Experience</h1>
                <div className="container1" data-aos="zoom-out" data-aos-duration="1000" data-aos-delay="100">
<<<<<<< HEAD
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
=======
                
                    <Link className="ex1" to="Job1" spy={true} smooth={true} offset={-100} duration={500} >
                        <img className="logo" src={alturath} alt='MSU logo'/>
                        <p>
                            Al-Turath University College<br></br>Baghdad, Iraq<br></br>Data Analyst<br></br>Jan 2022 - Present
                        </p>
                    </Link>
                    <Link className="ex2" to="Job2" spy={true} smooth={true} offset={-100} duration={500}>
                        <img className="logo" src={alturath} alt='MSU logo'/>
                        <p>
                            Al-Turath University College<br></br>Baghdad, Iraq<br></br>Lecturer<br></br>Jan 2023 - Present 
                        </p>
                    </Link>
                    <Link className="ex3" to="Job3" spy={true} smooth={true} offset={-100} duration={500}>
                        <img className="logo" src={alturath} alt='MSU logo'/>
                        <p>
                            Al-Turath University College<br></br>Baghdad, Iraq<br></br>International Relations Officer<br></br>Mar 2023 - Present 
                        </p>
                    </Link>
                    <Link className="ex4" to="Job4" spy={true} smooth={true} offset={-100} duration={500}>
                        <img className="logo" src={MSUImage} alt='MSU logo'/>
                        <p className="exdesc">
                        University of Colorado & MSU<br></br>Denver, USA<br></br>Mathematics Tutor<br></br>Aug 2015 - Jul 2021
                        </p>
                    </Link>
                    <Link className="ex5" to="Job5" spy={true} smooth={true} offset={-100} duration={500}>
                        <img className="logo pic2" src={Ishik} alt='UCD logo'/>
                        <p className="exdesc">
                            Ishik University<br></br>Erbil, Iraq<br></br>Data Entry Clerk<br></br>Sep 2012 - Jul 2014
                        </p>
                    </Link>
                    <Link className="ex6" to="Job6" spy={true} smooth={true} offset={-100} duration={500}>
                        <img className="logo pic2" src={swiss} alt='UCD logo'/>
                        <p className="exdesc">
                            Swisspro AG<br></br>Zurich, Switzerland<br></br>Electrician Apprentice<br></br>May 2011 - May 2012
                        </p>
                    </Link>
                </div>
           
                <div className="container3">
                     <div className="Job1">
                        <h1 data-aos="flip-down" data-aos-duration="1000" data-aos-delay="100">Al-Turath University College - Data Analyst</h1>
                        <ul data-aos="zoom-in-right" data-aos-duration="1000" data-aos-delay="100">
                            <li>Analysed and processed student enrolment data, managing an average of 10,000 student records per semester.
                            </li>
                            <li>Collaborated with registrar staff to optimize course registration processes, resulting in a 20% reduction in registration errors.
                            </li>
                            <li>Conducted data audits and quality checks on student records, improving data accuracy by 30%.</li>
                            <li>Presented analytical findings on student enrolment trends and retention rates at university board meetings and registrar forums.
                            </li>
                        </ul>
                    </div>
                    <div className="Job2">
                        <h1 data-aos="flip-down" data-aos-duration="1000" data-aos-delay="100">Al-Turath University College - Lecturer</h1>
                        <ul data-aos="zoom-in-right" data-aos-duration="1000" data-aos-delay="100">
                            <li>Developed and delivered over 50 lectures per semester in mathematics and English courses, engaging over 400 undergraduate students.
                            </li>
                            <li>Implemented innovative teaching strategies, resulting in an increase in student participation and comprehension.
                            </li>
                            <li>Designed and graded over 1200 assessments, including exams, quizzes, and essays, with detailed feedback to support student learning and development.</li>
                            <li>Achievedanaveragestudentperformanceimprovementof20%throughtargetedacademic support and guidance.
                            </li>
>>>>>>> 908902e (Made changes)
                        </ul>
                    </div>
                    <div className="Job3">
                        <h1 data-aos="flip-down" data-aos-duration="1000" data-aos-delay="100">Al-Turath University College - International Relations Officer</h1>
                        <ul data-aos="zoom-in-right" data-aos-duration="1000" data-aos-delay="100">
                            <li>Facilitated international partnerships and collaborations with other universities and organizations.
<<<<<<< HEAD
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
=======
                            </li>
                            <li>Coordinated study abroad programs and exchange programs for students and faculty.
                            </li>
                            <li>Advised students on international academic programs, including scholarships and grants.</li>
                            <li>Organized international conferences, workshops, and cultural events.
                            </li>
                        </ul>
                    </div>

                    <div className="Job4">
                        <h1 data-aos="flip-down" data-aos-duration="1000" data-aos-delay="100">University of Colorado & MSU - Mathematics Tutor</h1>
                        <ul data-aos="zoom-in-right" data-aos-duration="1000" data-aos-delay="100">
                            <li>Helped students understand mathematical concepts and principles.</li>
                            <li>Provided one-on-one instruction to students who are struggling with math.</li>
                            <li>Review and provide feedback on the student's homework, assignments, and exams.</li>
                            <li>Created customized lesson plans based on the student’s needs and level of understanding.</li>
                        </ul>
                    </div>

                    <div className="Job5">
                        <h1 data-aos="flip-down" data-aos-duration="1000" data-aos-delay="100">Ishik University - Data Entry Clerk</h1>
                        <ul data-aos="zoom-in-right" data-aos-duration="1000" data-aos-delay="100">
                            <li>Entered and verified student enrollment data for 1000+ students per semester into the
                            university database.
                            </li>
                            <li>Achieved a high level of accuracy with a 99% error-free rate in data entry tasks.
                            </li>
                            <li>Updated and maintained 1000+ student records, ensuring completeness and accuracy of
                            information.</li>
                            <li>Supported academic departments with data retrieval and reporting, assisting in generating statistical reports for administrative use.
                            </li>
                        </ul>
                    </div>
                    <div className="Job6">
                        <h1 data-aos="flip-down" data-aos-duration="1000" data-aos-delay="100">Swisspro AG - Electrician Apprentice</h1>
                        <ul data-aos="zoom-in-right" data-aos-duration="1000" data-aos-delay="100">
                            <li>Helped run wiring, conduit, and other electrical components.
                            </li>
                            <li>Assisted with the installation of lighting fixtures, outlets, and switches.</li>
                            <li>Helped troubleshoot and diagnose electrical problems.
                            </li>
                            <li>Learned how to read and interpret blueprints, diagrams, and schematics.</li>
                        </ul>
                    </div>
                </div>
            </div>
            <Side />
>>>>>>> 908902e (Made changes)
        </div>  
    );
};