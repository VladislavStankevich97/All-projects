import { v4 as uuidv4 } from 'uuid';
import {
  ADD_TODO, DELETE_TODO, TOGGLE_TODO, INPUT,
} from './constants';

export function input(message) {
  return {
    type: INPUT,
    message,
  };
}

export function addTodo() {
  return {
    type: ADD_TODO,
    id: uuidv4(),
  };
}

export function deleteTodo(id) {
  return {
    type: DELETE_TODO,
    id,
  };
}

export function toggleTodo(id) {
  return {
    type: TOGGLE_TODO,
    id,
  };
}