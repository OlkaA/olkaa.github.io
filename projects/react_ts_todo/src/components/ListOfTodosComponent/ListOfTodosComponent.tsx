import * as React from 'react';
import { TodoItemComponent } from '../TodoItemComponent/TodoItemComponent';

interface TodoItem {
    text: string
}

interface IListOfTodosComponentProps {
  list?: [TodoItem]
};

export function ListOfTodosComponent(props: IListOfTodosComponentProps) {
  return (
    <div>
      {props.list ? props.list.map(item => {
          return <li>{item}</li>
      }) : 'need to be changed'}
    </div>
  );
};