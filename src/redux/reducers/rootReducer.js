import { combineReducers } from 'redux';
import charactersReducer from './charactersReducer';

const rootReducer = combineReducers({
  // here the reducers
  characters: charactersReducer
});

export default rootReducer;