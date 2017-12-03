import { assoc, evolve, not, __ } from 'ramda';

const todos = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return assoc(action.payload.id, { ...action.payload, isDone: false }, state);
    case 'TOGGLE_TODO':
      return evolve(__, state)({
        [action.payload.id]: {
          isDone: not,
        },
      });
    default:
      return state;
  }
};

export default todos;
