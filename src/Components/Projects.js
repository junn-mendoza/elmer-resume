import React,{useState} from 'react';
import {FaGithub} from 'react-icons/fa';
import {MdLanguage} from 'react-icons/md'
import {
Card, CardImg, CardText, CardBody,
CardTitle, CardSubtitle
} from 'reactstrap';

import { FaLinkedin } from 'react-icons/fa';
import Loading from "./Loading";


const  Project=({project}) => {
    const [readMore, setReadMore] = useState(false);
    const {id,title,category,img,desc} = project;
         return (
            <div key={id}  className=" m-4 ">
                  <Card >
                    <div className="row card-img">
                        <CardImg top  width="100%" height="150px"  src={img} alt="Card image cap" />
                        <p className="row link">
                            <a href=""><i><MdLanguage /></i></a>
                            <a href="https://www.linkedin.com/in/elmer-mendoza/"><i><FaLinkedin /></i></a>
                            <a href="https://github.com/elmer-mendoza"><i><FaGithub /></i></a>
                        </p>
                    </div>  
                    <CardBody>
                        <CardTitle tag="h5">{title}</CardTitle>
                        <CardSubtitle tag="h6" className="mb-2 text-muted">{category}</CardSubtitle>
                          <CardText>
                            <p >
                               {readMore ? desc : `${desc.substring(0, 50)}`}
                                <button className="text-warning " onClick={() => setReadMore(!readMore)}>
                                    {readMore ? '...show less' : '...read more'}
                                </button>
                            </p>
                        </CardText>
                    </CardBody>
                </Card>
            </div>
        )
    }

const Projects = ({projects,loading}) => {
    if(loading){
    return <Loading/>
    }
  return (
        <div  id="projects" className="container" >
            <div className=" title row pt-5 text-center">
                <div className="col pt-5">
                    <h2>Projects</h2>
                    <div className="underline"></div>
                </div>
            </div>
            <div  className="row justify-content-center">
                {/* {projects.map((project,index) => {
                    return(
                        <Project key={index} project={project}/>
                    )
                })}  */}
            </div>
       </div> 
    
  );  
};

export default Projects;