import {
  TOGGLE_TODO,
  DELETE_TODO,
  ADD_TODO,
  INPUT,
} from "../actions/constants";

const initialState = {
  message: "",
  data: [],
  completed: false,
};

export default function changeTodos(state = initialState, action) {
  switch (action.type) {
    case INPUT: { 
      return { ...state, message: action.message };
    }
    case ADD_TODO: {
      const { data } = state;
      data.push({
        message: state.message,
        id: action.id,
        completed: action.completed,
      });
      const res = { data: [...data] };
      return { message: "", data: [...data] };
    }
    case DELETE_TODO:
      const todos = state.data.filter((todo) => todo.id !== action.id);
      return {
        ...state,
        data: todos,
      };
    case TOGGLE_TODO: {
      const res = state.data.map((todo) => {
        if (todo.id === action.id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });
      return { data: [...res] };
    }
    default:
      return state;
  }
}
