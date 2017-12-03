const uid = () => Math.random().toString(34).slice(2);

export const addTodo = text => ({
  type: 'ADD_TODO',
  payload: {
    text,
    id: uid(),
  },
});

export const toggleTodo = id => ({
  type: 'TOGGLE_TODO',
  payload: {
    id,
  },
});
