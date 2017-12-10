// @flow

type DefaultPayload = {
  id: string
}

type AddTodoAction = {
  +type: 'ADD_TODO',
  +payload: DefaultPayload & {
    text: string
  }
}

type ToggleTodoAction = {
  +type: 'TOGGLE_TODO',
  +payload: DefaultPayload
}

const uid = ():string => Math.random().toString(34).slice(2);

export const addTodo = (text: string): AddTodoAction => ({
  type: 'ADD_TODO',
  payload: {
    text,
    id: uid(),
  },
});

export const toggleTodo = (id: string): ToggleTodoAction => ({
  type: 'TOGGLE_TODO',
  payload: {
    id,
  },
});
