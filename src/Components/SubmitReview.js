import React,{useState,useEffect} from 'react'; 
import {Container,Row,Col, Button, Form, FormGroup, Input, FormText } from 'reactstrap';
import {FaStar} from 'react-icons/fa'
import axios from 'axios';
import Resizer from "react-image-file-resizer";


const Submit = () => {
    const [rating,setRating] =useState(null)
    const [hover,setHover] =useState(null)
    const [formData, setFormData] = useState({})
    const [newImage, setNewImage] = useState();
    
    const formSubmit = (e) =>{
        e.preventDefault();
        const data = ({...formData});
        axios.post(`http://localhost:5001/api/reviews`,data)
        .then(res=> {console.log(res)})
        .catch(err=>console.log(err));
        alert(`Thank you for your review ${formData.name}`)
        e.target.reset()  
        setRating(null);
        }
        
    const changeHandler =(e) => {
        setFormData({...formData,
            [e.target.name]:e.target.value
        })
        console.log(formData)
    }
    
    const fileChangedHandler=(e)=> {
    let fileInput = false;
    if (e.target.files[0]) {
     fileInput = true;
    }
    if (fileInput) {
     try {
       Resizer.imageFileResizer(
         e.target.files[0],
         300,
         300,
         "JPEG",
         100,
         0,
         (uri) => {
           console.log(uri);
        //    setNewImage({ newImage: uri });
         setFormData({...formData,reviewerImage:uri})  
         },
         "base64",
         200,
         200
       );
     } catch (err) {
       console.log(err);
     }
    }
    }
 
    return (
        <Container className="submitReview">
            <Row >
                <Col className="col-9 mx-auto">
                     <Form  id="myForm" onSubmit={formSubmit} method='post' encType='multipart/form-data'>
                        <FormGroup >
                                {[...Array(5)].map((_,i)=> {
                                    const ratingValue = i + 1;
                                     return (
                                        <label key={ratingValue}>
                                            <input 
                                                type="radio" 
                                                name="numStar" onChange={changeHandler}
                                                value={ratingValue}
                                                onClick={()=> setRating(ratingValue)} 
                                                required  />
                                            <FaStar className="star" 
                                                color={ratingValue <= (hover || rating) ? "#ffc107" : "rgb(128,128,128)"}
                                                onMouseEnter={()=>setHover(ratingValue)}
                                                onMouseLeave={()=>setHover(null)} />
                                        </label>
                                    )
                                })}
                        </FormGroup>
                        <FormGroup>
                            <Input type="textarea" name="comment"  onChange={changeHandler} id="textArea" placeholder="Write your comment" required/>
                        </FormGroup>
                        <FormGroup>
                            <Input type="text" name="name" id="name"  onChange={changeHandler} placeholder="Name" required/>
                        </FormGroup>
                         <FormGroup>
                            <Input type="file" name="reviewerImage"  id="reviewerImage"  onChange={fileChangedHandler} /> 
                              <FormText color="muted">
                                <img src={newImage} alt="" /> 
                                Upload your profile picture
                            </FormText>
                                <Button className="my-1" >Submit</Button>
                        </FormGroup>
                    </Form>
                </Col>
            </Row>
        </Container>
    ) 
}

export default Submit









