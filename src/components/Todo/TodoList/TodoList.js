import React from 'react';

import TodoItem from '../TodoItem/TodoItem';
import './TodoList.css';

const TodoList = props => {
  return (
    <ul className="goal-list">
      {props.items.map(item => (
        <TodoItem
          key={item.id}
          id={item.id}
          onDelete={props.onDeleteItem}
        >
          {item.text}
        </TodoItem>
      ))}
    </ul>
  );
};

export default TodoList;
