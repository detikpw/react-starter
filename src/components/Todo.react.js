// @flow

import React from 'react';

import type { Todo as TodoType } from '../type/todos';

type Props = {
  todo: TodoType
};

const Todo = ({ todo }: Props) => {
  if (todo.isDone) {
    return <strike>{todo.text}</strike>;
  }
  return <span>{todo.text}</span>;
};

export default Todo;
