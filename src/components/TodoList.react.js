import React from 'react';
import { connect } from 'react-redux';
import { Text } from 'rebass';

import * as actions from '../actions/todo';

import type { Todos } from '../type/todos';

type Props = {
  todos: Todos,
  toggleTodo: actions.toggleTodo,
  addTodo: actions.addTodo,
}


const TodoList = ({ todos, toggleTodo, addTodo }: Props) => {
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
          <Text key={t.id} bold={t.isDone} onClick={toggleClick(t.id)}>{t.text}</Text>
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
