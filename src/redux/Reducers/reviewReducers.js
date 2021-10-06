import * as ActionTypes from '../ActionTypes'

const initState = {
    reviews:[{}]
}

const reviewReducers =(state=initState,action) =>{
    switch(action.type){
        case ActionTypes.FETCH_REVIEWDATA_REQUEST :
            return {...state,reviews:action.payload }
        default: return state
     }        
}
export default reviewReducers
