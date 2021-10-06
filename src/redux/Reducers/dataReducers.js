import * as ActionTypes from '../ActionTypes'

const initState = {
    isLoading: true,
    errMess: null,
    data:[{}]
}

const dataReducers =(state=initState,action) =>{
    switch (action.type) {
        case ActionTypes.FETCH_DATA_SUCCESS:
            return {...state, isLoading: false,errMess: null, data: action.payload};
        case ActionTypes.FETCH_DATA_REQUEST:
            return {...state, isLoading: true, errMess: null, data: [{}]};
        case ActionTypes.FETCH_DATA_FAIL:
            return {...state, isLoading: false, errMess: action.payload};
        default: return state;
     }        
}
export default dataReducers