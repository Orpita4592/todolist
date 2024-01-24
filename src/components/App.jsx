import React, { useState } from "react";
import InputArea from "./InputArea";
import ToDoItem from "./ToDoItem";

function App() {

 
  const [list, setList] = useState([]);

  

  function addItem(item){
    setList(prevValue => {
      return [...prevValue, item];
    });
  }

  function deleteItem(id){
    setList(prevValue => {
      return prevValue.filter(
        (item, index) => {
          return index !== id;
        } 
      );
    })
  }

  function getItem(item, index){
    return (
      <ToDoItem text={item} key={index} id={index} onClicked={deleteItem}></ToDoItem>
    );
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea onClicked={addItem}></InputArea>
      <div>
        <ul>
            {list.map(getItem)}
        </ul>
      </div>
    </div>
  );
}

export default App;
