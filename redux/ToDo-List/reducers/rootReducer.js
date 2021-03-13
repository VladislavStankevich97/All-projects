import { combineReducers } from 'redux';
import changeTodos from './changeTodos';
import filterTodos from './filterTodos';

export default combineReducers({
  filterTodos,
  changeTodos,
});
