import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import * as Login from './Login/reducer'
let store = createStore(
  combineReducers({
      ...Login
    }),
  applyMiddleware(thunk)
);

export default store;