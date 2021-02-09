import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import * as Login from './Login/reducer'
import * as HeaderBar from './HeaderBar/reducer'
let store = createStore(
  combineReducers({
      ...Login,
      ...HeaderBar
    }),
  applyMiddleware(thunk)
);

export default store;