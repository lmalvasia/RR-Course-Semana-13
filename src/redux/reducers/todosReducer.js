import { ADD_TODO, TOGGLE_TODO } from '../../constants/actionTypes';

const initialState = {
  list: [],
};

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        list: [
          ...state.list,
          {
            id: action.id,
            text: action.text,
            completed: false
          }
        ]
      };
    case TOGGLE_TODO:
      return {
        ...state,
        list: state.list.map(todo => {
          return todo.id === action.id
            ? {
              ...todo,
              completed: !todo.completed
            }
            : todo;
        })
      };
    default:
      return state;
  }
}

export default todosReducer;