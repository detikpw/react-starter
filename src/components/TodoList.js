import React from 'react';
import { connect } from 'react-redux';

import Todo from './Todo';
import * as actions from '../actions/todo';

const TodoList = ({ todos, toggleTodo, addTodo }) => {
  const onSubmit = (event) => {
    const input = event.target;
    const text = input.value;
    const isEnterKey = (event.which === 13);
    const isLongEnough = text.length > 0;

    if (isEnterKey && isLongEnough) {
      input.value = '';
      addTodo(text);
    }
  };

  const toggleClick = id => () => toggleTodo(id);

  const todoList = Object.keys(todos).map(k => todos[k]);

  return (
    <div className="todo">
      <input
        type="text"
        className="todo__entry"
        placeholder="Add todo"
        onKeyDown={onSubmit}
      />
      <ul className="todo__list">
        {todoList.map(t => (
          <li
            key={t.id}
            className="todo__item"
            onClick={toggleClick(t.id)}
          >
            <Todo todo={t} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default connect(
  state => ({
    todos: state.todos,
  }),
  {
    addTodo: text => actions.addTodo(text),
    toggleTodo: id => actions.toggleTodo(id),
  },
)(TodoList);
