import  React from 'react';
import {FaGithub} from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import image from "./backgroundImage/self.png"

const Hero = () => {
    
    return (
        <div className="row fluid hero  mx-0 px-0">
            <div className="container ">
                <div className="row  ">
                    <div className="col-7  ">
                         <img src={image}  alt="Self" /> 
                    </div>
                    <div className="col-5 text-center ">
                          <h3 >Web Designer/Developer
                                <a href="https://www.linkedin.com/in/elmer-mendoza/"><i><FaLinkedin /></i></a>
                                <a href="https://github.com/elmer-mendoza"><i><FaGithub /></i></a>
                          </h3>
                    </div>  
                </div>
            </div>
        </div>      
    )
}

export default Hero;




