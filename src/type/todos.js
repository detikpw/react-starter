// @flow

export type Todo = {
  id: string,
  isDone: boolean,
  text: string,
}

export type Todos = {
  [id: string]: Todo,
}
