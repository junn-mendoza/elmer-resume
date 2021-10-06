import React from 'react';
import {Container,Row,Col} from 'reactstrap';
import {FaStar} from 'react-icons/fa';

const FilteredReviews = (props) => {
      return (
        <Container >
            <Row className="justify-content-center ">
                  {props.filteredReviews.map((review) => {
                    const {reviewerImage,name,date,comment,id,numStar} = review;
                    return (
                          <Col className="fback_card border border-primary  p-3 m-2 shadow" key={id}>
                            <Row className="m-0  p-2">
                                {[...Array(5)].map((_,index) => {
                                let  i = index +=1;
                                let color;
                                (i<=numStar) ? color = "#F8D210" : color = "grey"
                                return  (
                                    <FaStar key={i} style={{color}}/>
                                )})}
                            </Row>
                            <Row className="m-0 text-justify p-2">
                                    "{comment}" 
                            </Row>
                             <hr/>
                            <Row >
                                <Col className="col-4">
                                    <img src={reviewerImage} className="fback_img shadow m-1"  alt="" />
                                </Col>
                                <Col className="col-8 ">
                                    <Row className="reviewerName">
                                        <h6> {name}</h6>
                                    </Row>
                                    <Row>
                                       - {new Intl.DateTimeFormat(
                                            'en-US', 
                                            { year: 'numeric', month: 'short', day: '2-digit'})
                                            .format(new Date(Date.parse(date)))} 
                                    </Row>
                                </Col>
                            </Row>
                        </Col>
                    )   
                   })}
             </Row>
        </Container>
    )
}
export default FilteredReviews;
