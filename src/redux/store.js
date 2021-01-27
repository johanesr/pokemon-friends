import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import reducers from './reducer';

const preLoadedState = {};

const store = createStore(reducers, preLoadedState, applyMiddleware(thunkMiddleware));

export default store;