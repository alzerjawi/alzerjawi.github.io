import React from "react";
import image from './hassan_spain.jpg';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from "react-router-dom";
import resume from './resume.pdf';

export const Home = () => {
    return (
        <div className="home">
            <div className='main'>
                <div class='para intro'>
                    <h1 data-aos="flip-down" data-aos-duration="1000" data-aos-delay="100">I'm Hassan, a MSc student at the University of Westminster with a BSc in Applied Mathematics from MSU Denver. I'm currently in the finals phase of my studies, based in Baghdad, Iraq.</h1>
                    <p data-aos="flip-down" data-aos-duration="1000" data-aos-delay="100">I have a strong foundation in computer science and mathematics, including proficiency in software development, and data analysis. I am actively seeking job opportunities as a software developer, full-stack developer, data scientist, and data analyst. Additionally, I am authorized to work in Switzerland, EU, and MENA region.</p>
                
                </div>
                
                <div className="me" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="100">
                    <h1>About Me</h1>
                    <div className="me1">
                        
                        <p>As a Swiss and Iraqi national, I am a software developer who is passionate about programming and loves to explore new technologies and programming languages. I have experience in a variety of programming languages, including Java, JavaScript, C#, Python, C++, Bash, and Zsh. I enjoy building web applications and have expertise in HTML5, CSS3, Flask, React, and Django. In addition, I have experience with data management, visualization, and math tools, including SQL, R, Tableau, SQLAlchemy, and Matlab. During my time at the University of Westminster, I have been studying software engineering and have gained extensive knowledge in the field. I am excited to use this knowledge to develop software solutions that can solve real-world problems. I believe that good software should be user-friendly, reliable, and efficient. Aside from my technical skills, I am also a great team player and have experience working with Git and GitHub. I am confident that my technical expertise, coupled with my passion for programming and my ability to work well in a team, make me a valuable asset to any software development team.<br></br><br></br>Hobbies:</p>
                        <ul>
                            <li>Football</li>
                            <li>Reading</li>
                            <li>Coding</li>
                            <li>Gaming</li>
                        </ul>
                    </div>
                </div>

                <Link class="btn btn-dark btn-lg" to="/portfolio" role="button" data-aos="flip-left" data-aos-duration="1000" data-aos-delay="100">Click for Portfolio</Link>

                <div className="skills" data-aos="zoom-out" data-aos-duration="1000" data-aos-delay="100">
                    <h1>Skills</h1>
                    <div className="skill">
                        <div className="skill-name"><p>Python</p></div>
                        <div className="bar1">
                            <div className="progress1"></div>
                        </div>
                        <div className="percent">85%</div>
                    </div>

                    <div className="skill">
                        <div className="skill-name"><p>Java</p></div>
                        <div className="bar1">
                            <div className="progress2"></div>
                        </div>
                        <div className="percent">83%</div>
                    </div>

                    <div className="skill">
                        <div className="skill-name"><p>C#</p></div>
                        <div className="bar1">
                            <div className="progress3"></div>
                        </div>
                        <div className="percent">88%</div>
                    </div>

                    <div className="skill">
                        <div className="skill-name"><p>HTML5</p></div>
                        <div className="bar1">
                            <div className="progress4"></div>
                        </div>
                        <div className="percent">92%</div>
                    </div>

                    <div className="skill">
                        <div className="skill-name"><p>CSS3</p></div>
                        <div className="bar1">
                            <div className="progress5"></div>
                        </div>
                        <div className="percent">89%</div>
                    </div>

                    <div className="skill">
                        <div className="skill-name"><p>JavaScript</p></div>
                        <div className="bar1">
                            <div className="progress6"></div>
                        </div>
                        <div className="percent">86%</div>
                    </div>

                    <div className="skill">
                        <div className="skill-name"><p>Tableau</p></div>
                        <div className="bar1">
                            <div className="progress7"></div>
                        </div>
                        <div className="percent">77%</div>
                    </div>

                    <div className="skill">
                        <div className="skill-name"><p>SQL</p></div>
                        <div className="bar1">
                            <div className="progress8"></div>
                        </div>
                        <div className="percent">82%</div>
                    </div>

                    <div className="skill">
                        <div className="skill-name"><p>R</p></div>
                        <div className="bar1">
                            <div className="progress9"></div>
                        </div>
                        <div className="percent">76%</div>
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