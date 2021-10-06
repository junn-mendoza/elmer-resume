import React, { useState } from 'react';
import {Modal, ModalHeader, ModalBody,Form,Label,Input} from 'reactstrap';
import FilteredReviews from './FilteredReviews';

const SortReviewsHeader =({numStar,sortDate})=> {
  const options = [...Array(5)].map((_,index)=>{
              let i = index +=1
              return (
                <option>{i}</option>
                )
            });
  return (
      <Form >
          <Label className="ml-3" for="numStar">No of stars
            <Input type="select" name="numStar" id="numStar" onChange={numStar} >
                <option>All</option> 
                {options}           
            </Input>
          </Label>
          <Label className="ml-3" for="sortDate">Date
            <Input type="select" name="sortDate" id="sortDate" onChange={sortDate} >
              <option disabled>Sort</option>
              <option>Latest</option>
              <option>Earliest</option>
          </Input>
          </Label>
      </Form>
);
}

const ReviewsModal = (props) => {

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const [filteredReviews,setFilteredReviews] = useState(props.reviews);
  
  const sortDate =(e)=> {
    
    if (e.target.value === "Earliest") {
      const sortedDate=filteredReviews.sort((a,b)=> a.date<b.date ? -1:1);
      return setFilteredReviews([...sortedDate]);
    }
    if (e.target.value === "Latest") {
      const sortedDate=filteredReviews.sort((a,b)=>a.date>b.date ? -1:1);
      return setFilteredReviews([...sortedDate]);
    }  
  }
  
  const numStar =  (e) => {
     if (e.target.value === "All") {
      setFilteredReviews(props.reviews);
     }
    else{
      let filterReviews = props.reviews.filter(review => review.numStar == e.target.value)
      setFilteredReviews(filterReviews);
    }
  }

 const handleDisplayReview = ()=> {
   props.fetchReviews()
   toggle();
   setFilteredReviews(props.reviews)

 }

  return (
    <div>
      <button className="btn button-glow btn-sm ml-3 my-auto" onClick={handleDisplayReview}>see reviews</button>
      <Modal isOpen={modal} toggle={toggle} >
        <ModalHeader className="fixed-top bg-light" toggle={toggle} >
            <SortReviewsHeader sortDate={sortDate} numStar={numStar} />
        </ModalHeader>
        <ModalBody className="mt-5 " style={{paddingTop: 100}} >
            <FilteredReviews  filteredReviews={filteredReviews}/>
        </ModalBody>
       </Modal>
    </div>
  );
}

export default ReviewsModal
