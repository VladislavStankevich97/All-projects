import { v4 as uuidv4 } from 'uuid';
import {
  ADD_TODO, DELETE_TODO, TOGGLE_TODO, SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED, INPUT,
} from './constants';

export function input(value) {
  return {
    type: INPUT,
    value,
  };
}

export function addTodo(message) {
  return {
    type: ADD_TODO,
    message,
    completed: false,
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

export function showAll() {
  return {
    type: SHOW_ALL,
    payload: false,
  };
}

export function showActive() {
  return {
    type: SHOW_ACTIVE,
  };
}

export function showCompleted() {
  return {
    type: SHOW_COMPLETED,
  };
}
