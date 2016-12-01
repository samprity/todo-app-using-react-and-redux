//let allows you to declare variables that are limited in scope to the block, statement, or expression on which it is used
let nextTodoId = 0
//adding a new to do item
//Actions are plain JavaScript objects. Actions must have a type property that indicates the type of action being performed. 
//In Redux action creators simply return an action:
export const addTodo = (text) => {
  return {
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
  }
}
//changes the currently visible todos
export const setVisibilityFilter = (filter) => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
}
//describes a user ticking off a todo as completed
export const toggleTodo = (id) => {
  return {
    type: 'TOGGLE_TODO',
    id
  }
}