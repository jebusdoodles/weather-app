import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './../reducers';

const initialState = {
     city: 'Ciudad de Mexico, mx'
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; 

export const store = createStore(reducers, initialState, composeEnhancers(applyMiddleware(thunk)));