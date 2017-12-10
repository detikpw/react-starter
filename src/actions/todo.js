// @flow

type DefaultPayload = {
  id: string
}

type AddTodoAction = {
  +type: 'ADD_TODO',
  +payload: {
    text: string
  }
}

type ToggleTodoAction = {
  +type: 'TOGGLE_TODO',
  +payload: DefaultPayload
}

export const addTodo = (text: string): AddTodoAction => ({
  type: 'ADD_TODO',
  payload: { text },
});

export const toggleTodo = (id: string): ToggleTodoAction => ({
  type: 'TOGGLE_TODO',
  payload: {
    id,
  },
});
