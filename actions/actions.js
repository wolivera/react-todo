import * as types from './actionTypes'

let nextTodoId = 0;

export function addTodo(text) {
  return {
    type: types.ADD_TODO,
    id: nextTodoId++,
    text
  };
}

export function doneTodo(id) {
	return {
		type: types.DONE_TODO,
		id: id
	}
}
