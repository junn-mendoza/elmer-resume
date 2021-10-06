import React, {useEffect} from 'react';
import {Container,Col,Row, Progress} from 'reactstrap';
import {FaStar} from 'react-icons/fa'
import SubmitReview from './SubmitReview'
import ReviewsModal from './ReviewsModal'
import {connect} from 'react-redux';
import { fetchReviews } from '../redux/ActionsCreator';
import Loading from "./Loading";

const mapStateToProps = state => {
   return {
       reviews : state.reviews.reviews
   } 
}

const mapDispatchToProps = {
     fetchReviews
}

const Reviews = (props) => {
     useEffect(()=>{
        props.fetchReviews();
    },[]);
  
    const ratings = props.reviews.map(review => { return( review.numStar)})
    const aveRating = ratings.reduce((a,b)=> (+a)+(+b))/(ratings.length);
 
    if(props.loading){ return <Loading/> } 

    return (
        <Container id='reviews' >
            <Row className="py-4 my-4">
                <Col className="title py-4 my-4" >
                <h2 >Reviews</h2>
                 <div className="underline"></div>
                </Col>
            </Row>
            <Row className="mx-auto px-auto ">
                <Col  sm="12" md="6"  >
                     <Row className="justify-content-center pb-3">
                         {[...Array(5)].map((_,i)=> {
                            const ratingValue = i+1;
                            return (
                                <label key={ratingValue}>
                                    <FaStar className="starRating"
                                        color={ratingValue <= aveRating ? "#ffc107" : "rgb(128,128,128)"}/>
                                </label>
                                )
                            })} 
                            <ReviewsModal reviews={props.reviews}  fetchReviews={props.fetchReviews}/>
                     </Row> 
                   
                   {[...Array(5)].map((_,i) => {
                        const index = 5-i;
                        let countOfStar = [];
                        countOfStar = ratings.filter(star=>{ return(star == index)})
                        const rate = Math.trunc((countOfStar.length/(ratings.length))*100)
                        return (
       
                                <Row key={index}>
                                    <div className="col-3 pl-5  my-auto">
                                        <span >{index}star</span>
                                    </div>
                                    <div className="col-6 mb-3">
                                        <Progress id="progressTooltip" value={rate} style={{marginTop:"1.25rem"}}/>
                                    </div>
                                    <div className="col-3 my-auto">
                                        <span >{rate}%</span>
                                    </div>
                                </Row>
                          )
                    })}
                </Col>
                <Col text-align-left sm="12" md="6">
                    <SubmitReview/>
                </Col>
            </Row>
         </Container>
    )
}

export default connect(mapStateToProps,mapDispatchToProps)(Reviews)
