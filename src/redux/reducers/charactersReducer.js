import {
  REQUEST_CHARACTERS,
  RECEIVE_CHARACTERS,
  FAILURE_CHARACTERS,
  REQUEST_ADD_CHARACTER,
  RECEIVE_ADD_CHARACTER,
  FAILURE_ADD_CHARACTER,
  REQUEST_DELETE_CHARACTER,
  RECEIVE_DELETE_CHARACTER,
  FAILURE_DELETE_CHARACTER
} from '../../constants/actionTypes';
const initialState = {
  isLoading: false,
  list: [],
  error: false
};

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_CHARACTERS:
      return {
        ...state,
        isLoading: true,
      };
    case RECEIVE_CHARACTERS:
      return {
        ...state,
        isLoading: false,
        list: action.payload
      };
    case FAILURE_CHARACTERS:
      return {
        ...state,
        isLoading: false,
        error: true
      };
    case REQUEST_ADD_CHARACTER:
      return {
        ...state,
        isLoading: true,
      };
    case RECEIVE_ADD_CHARACTER:
      return {
        ...state,
        isLoading: false,
        list: [...state.list, action.payload]
      };
    case FAILURE_ADD_CHARACTER:
      return {
        ...state,
        isLoading: false,
        error: true
      };
    case REQUEST_DELETE_CHARACTER:
      return {
        ...state,
        isLoading: true,
      };
    case RECEIVE_DELETE_CHARACTER:
      return {
        ...state,
        isLoading: false,
        list: state.list.filter(character => character._id !== action.payload)
      };
    case FAILURE_DELETE_CHARACTER:
      return {
        ...state,
        isLoading: false,
        error: true
      };
    default:
      return state;
  }
}

export default todosReducer;