/* eslint-disable no-case-declarations */

import { TOGGLE_TODO, DELETE_TODO, ADD_TODO } from '../actions/constants';

const initialState = {
  value: '',
  // data: JSON.parse(localStorage.getItem('data')) || [],
  data:[],
};

export default function headerReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO: {
      const { data } = state;
      data.push({
        message: action.message,
        id: action.id,
        completed: action.completed,
      });
      const res = { data: [...data] };
      // localStorage.setItem('data', JSON.stringify(state.data));
      return res;
    }
    case DELETE_TODO:
      const todos = state.data.filter((todo) => todo.id !== action.id);
      // localStorage.setItem('data', JSON.stringify(todos));
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
      // localStorage.setItem('data', JSON.stringify([...res]));
      return { data: [...res] };
    }
    default:
      return state;
  }
}
