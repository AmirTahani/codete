import React, {useState} from "react";

import TodoList from "./components/Todo/TodoList/TodoList";
import InputForm from "./components/Todo/InputForm/InputForm";
import "./App.css";

const App = () => {
  const [todoItems, setTodoItems] = useState([
    {text: "Implement empty field validation", id: "i1"},
    {text: "Have fun", id: "i2"},
  ]);

  const addItem = (itemName) => {
    setTodoItems((prevItems) => {
      const freshItems = [...prevItems];
      freshItems.unshift({text: itemName, id: Math.random().toString()});
      return freshItems;
    });
  };

  const deleteItem = (itemId) => {
    setTodoItems((prevItems) => {
      return prevItems.filter((currentItem) => currentItem.id !== itemId);
    });
  };

  let content = <p style={{textAlign: "center"}}>The list is empty.</p>;

  if (todoItems.length > 0) {
    content = (
      <TodoList items={todoItems} onDeleteItem={deleteItem} />
    );
  }

  return (
    <div>
      <section className="todo-form">
        <InputForm shouldValidateEmptyString errorMessage="Input cannot be empty" onAddItem={addItem} />
      </section>
      <section className="todo-list">
        {content}
      </section>
    </div>
  );
};

export default App;
