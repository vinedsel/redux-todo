import React from 'react';

const TodoList = ({ items, onAddTodo, onTodoTextChanged, addTodoText }) => {

  const todoToListItem = item => <li key={item.id}>{item.todo}</li>;

  const itemList = items.map(todoToListItem);

  return (
    <div>
        <input onChange={event => onTodoTextChanged(event.target.value)} value={addTodoText} type="text"/>
        <button onClick={onAddTodo}>Add Item</button>
      <ul>{itemList}</ul>
    </div>
  );
};

export default TodoList;
