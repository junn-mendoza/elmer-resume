import React,{useState} from 'react';
import  { Container,Row,Col,Modal, ModalBody} from 'reactstrap';
import reactCert from "./backgroundImage/reactCert.jpg"
import reactNativeCert from "./backgroundImage/reactNativeCert.jpg"
import frontEndCert from "./backgroundImage/frontEndCert.jpg"
import pythonCert from "./backgroundImage/pythonCert.png"
import backEndCert from "./backgroundImage/backEndCert.jpg"
import fullStackCert from "./backgroundImage/fullStackCert.jpg"

import Loading from "./Loading";

function Education({education,loading}) {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
    if(loading){
    return <Loading/>
    } 
    return (
      <Container id='education'>
          <Row>
            <Col  >
              <div className="title pt-5 my-5">
               <button className="button-glow" onClick={()=>toggle()}><h2>Education And Licenses</h2></button>
               <div className="underline"></div>
              </div>
              
              <div >
                  {education && education.map((educ,index) =>{
                      const {school,accomplishment,year} = educ;
                      return (
                        <article key={index} className="job-info">
                            <h3>{accomplishment}</h3>
                             <h6> {school}<span>   {year}</span></h6>
                               <div/>
                        </article>
                      )
                    })}
               </div>
            </Col>
          </Row>
          <div>
            <Modal isOpen={modal} toggle={toggle} >
                 <ModalBody className="mt-5 certificate " style={{paddingTop: 50}}toggle={toggle} >
                    <img src={fullStackCert}  alt="" img/>
                    <img src={frontEndCert}  alt="" img/>
                    <img src={backEndCert}  alt="" img/>
                    <img src={reactCert}  alt="" img/>
                    <img src={reactNativeCert}  alt="" img/>
                    <img src={pythonCert}  alt="" img/>
                </ModalBody>
            </Modal>
     </div>
      </Container>
    )
}

export default Education