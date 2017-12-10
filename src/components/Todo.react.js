// @flow

import React from 'react';
import { Text } from 'rebass';

import type { Todo as TodoType } from '../type/todos';

type Props = {
  todo: TodoType
};

const Todo = ({ todo }: Props) =>
  <Text active={todo.isDone}>{todo.text}</Text>;

export default Todo;
