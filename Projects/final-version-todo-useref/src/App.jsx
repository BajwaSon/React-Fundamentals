/* eslint-disable no-unused-vars */
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import WelcomeMessage from "./components/welcomemessage";
import "./App.css";
import { useState } from "react";

function App() {
  const [todoItems, setTodoItems] = useState([]);

  const handleNewItem = (itemName, itemDueDate) => {
    // setTodoItems((currentVal) => {
    //   const newTodoItems = [
    //     ...currentVal,
    //     { name: itemName, dueDate: itemDueDate },
    //   ];
    // });

    setTodoItems((currentVal) => [
      ...currentVal,
      { name: itemName, dueDate: itemDueDate },
    ]);
  };

  const handleDelItem = (todoItemName) => {
    const newTodoItems = todoItems.filter((item) => item.name !== todoItemName);
    setTodoItems(newTodoItems);
  };

  return (
    <center className="todo-container">
      <AppName />
      <AddTodo onNewItem={handleNewItem} />
      {todoItems.length === 0 && <WelcomeMessage />}
      <TodoItems
        todoItems={todoItems}
        onDeleteClick={handleDelItem}
      ></TodoItems>
    </center>
  );
}

export default App;
