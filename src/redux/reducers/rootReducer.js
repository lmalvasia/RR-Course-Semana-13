import { combineReducers } from 'redux';
import todosReducer from './todosReducer';

const rootReducer = combineReducers({
  // here the reducers
  todos: todosReducer
});

export default rootReducer;