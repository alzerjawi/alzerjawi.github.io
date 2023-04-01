import React from "react";
import image from './hassan_spain.jpg';
import construction from './construction.png'

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
                    <p className="info">Email me at:<br></br>halzerjawi21@gmail.com<br></br>hassan@alzerjawi.com</p>
                </div>
                
            </div>
        </div>  
    );
};