import { SET_TODO_INPUT, ADD_TODO } from "./Constains";

export const setTodoInput = (payload) => ({
  type: SET_TODO_INPUT,
  payload,
});

export const addTOdo = (payload) => ({
  type: ADD_TODO,
  payload,
});
