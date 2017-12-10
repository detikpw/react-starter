import { assoc, evolve, merge, not, __ } from 'ramda';

const uid = ():string => Math.random().toString(34).slice(2);

const initialTodo = {
  id: uid(),
  text: '',
  isDone: false,
};

const initialState = { };

const todos = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return assoc(action.payload.id, merge(initialTodo, action.payload), state);
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
