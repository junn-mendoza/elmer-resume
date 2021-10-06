import {createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reviewReducer from './Reducers/reviewReducers';
import dataReducer from './Reducers/dataReducers';

const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            reviews: reviewReducer,
            data: dataReducer,
         }),
        applyMiddleware(thunk)
    );
    return store;
};

export default ConfigureStore