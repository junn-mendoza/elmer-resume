import React from 'react';
import Loading from "./Loading";
import {skills} from './data'

const Skills = ({loading}) => {
    if(loading){
    return <Loading/>
    } 
  return (
        <div id='skills' className="container">
            <div className=" title row pt-5 text-center">
                <div className="col pt-5">
                    <h2>Skills</h2>
                    <div className="underline"></div>
                </div>
            </div>
            <div  className="row justify-content-center">
                {skills.map((skill,index) => {
                         return (
                            <div key={index} style={{fontSize:"100px"}} className=" text-center col  m-2 ">
                            {skill.icon}<p className="text-center" style={{fontSize:"20px"}} >{skill.name}</p>
                            </div>
                        )
                })}
            </div>
        </div> 
  );  
};

export default Skills;
