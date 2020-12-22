import {
  GET_CHARACTERS_FETCHING,
  GET_CHARACTERS_FULFILLED,
  GET_CHARACTERS_REJECTED,
  ADD_CHARACTERS_FETCHING,
  ADD_CHARACTERS_FULFILLED,
  ADD_CHARACTERS_REJECTED,
  DELETE_CHARACTERS_FETCHING,
  DELETE_CHARACTERS_FULFILLED,
  DELETE_CHARACTERS_REJECTED,
} from '../../constants/actionTypes';
const initialState = {
  isLoading: false,
  list: [],
  error: false
};

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CHARACTERS_FETCHING:
      return {
        ...state,
        isLoading: true,
      };
    case GET_CHARACTERS_FULFILLED:
      return {
        ...state,
        isLoading: false,
        list: action.payload
      };
    case GET_CHARACTERS_REJECTED:
      return {
        ...state,
        isLoading: false,
        error: true
      };
    case ADD_CHARACTERS_FETCHING:
      return {
        ...state,
        isLoading: true,
      };
    case ADD_CHARACTERS_FULFILLED:
      return {
        ...state,
        isLoading: false,
        list: [...state.list, action.payload]
      };
    case ADD_CHARACTERS_REJECTED:
      return {
        ...state,
        isLoading: false,
        error: true
      };
    case DELETE_CHARACTERS_FETCHING:
      return {
        ...state,
        isLoading: true,
      };
    case DELETE_CHARACTERS_FULFILLED:
      return {
        ...state,
        isLoading: false,
        list: state.list.filter(character => character._id !== action.payload)
      };
    case DELETE_CHARACTERS_REJECTED:
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