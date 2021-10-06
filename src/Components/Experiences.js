import React, { useState} from 'react';
import  { Container,Row,Col } from 'reactstrap';
import { FaAngleDoubleRight } from 'react-icons/fa';
import Loading from "./Loading";


const JobInfo =(props) =>{
  const { company, dates, duties, title } = props.jobs[props.value]
  return (
    <article className="job-info">
        <h3>{title}</h3>
        {company}
        <p className="job-date">{dates}</p>
        {duties.map((duty, index) => {
          return (
            <div key={index} className="job-desc">
              <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
              <p>{duty}</p>
            </div>
          )
        })}
    </article>
  )
}


function Experiences({jobs,loading}) {
    const [value, setValue] = useState(0)
     if(loading){
    return <Loading/>
    } 
    return (
      <Container id='experience' >
          <Row>
            <Col  >
              <div className="title pt-5 my-5">
                <h2>experience</h2>
                <div className="underline"></div>
                <p><a href="https://docs.google.com/document/d/1ch25tWjfQP7AQUkVdJ63_50BwpGKqZH_0T79Gkp0nvk/edit?usp=sharing
                ">Download Resume Here</a></p>
              </div>
              <div className="jobs-center">
                  {/* btn container */}
                  <div className="btn-container">
                        { jobs && jobs.map((job, index) => {
                          return (
                              <button
                                key={job.id}
                                onClick={() => setValue(index)}
                                className={`job-btn ${index === value && 'active-btn'}`} >
                                {job.company}
                              </button>
                          )
                        })}
                  </div>
                  {/* <JobInfo  jobs={jobs} value={value}/> */}
               </div>
            </Col>
          </Row>
      </Container>
    )
}

export default Experiences
