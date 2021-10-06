import * as ActionTypes from './ActionTypes';

// if (process.env.NODE_ENV !== 'production') {
//   require('dotenv').config()
// }

export  const fetchReviews=()=>async(dispatch) => {
        const REVIEWDATA_URL=process.env.REACT_APP_REVIEWDATA_URL;
        const response= await fetch(process.env.REACT_APP_REVIEWDATA_URL);
        const fetchedreviews = await response.json();
        const sortedReviewsByDate=fetchedreviews.sort((a,b)=> a.date>b.date ? -1:1);
        dispatch(addReviews(sortedReviewsByDate));
  }
 export const addReviews = (reviews)=>({
        type: ActionTypes.FETCH_REVIEWDATA_REQUEST,
        payload:reviews
    })


export const fetchData = () => dispatch => {
     dispatch(dataLoading());
     const MAINDATA_URL=process.env.REACT_APP_MAINDATA_URL;
    return fetch(process.env.REACT_APP_MAINDATA_URL)
    .then(response => {
         if (response.ok) {
            return response;
        } else {
            console.log(response)
            const error = new Error(`Error ${response.status}: ${response.statusText}`);
            error.response = response;
            throw error;
        }
    },
    error => {
        const errMess = new Error(error.message);
        throw errMess;
    }
)
.then(response => response.json())
.then(data => dispatch(loadingSuccess(data)))
.catch(error => dispatch(dataLoadingFailed(error.message)));
};

export const dataLoading = () => ({
    type: ActionTypes.FETCH_DATA_REQUEST
});

export const dataLoadingFailed = errMess => ({
    type: ActionTypes.FETCH_DATA_FAIL,
    payload: errMess
});

export const loadingSuccess = data => ({
    type: ActionTypes.FETCH_DATA_SUCCESS,
    payload: data
});