import React from 'react';
import './App.css';
import {TodoList} from "./components/TodoList.js";

function App() {
  return (
    <div className="App">
      {/* - Now render your list of todos from your reducer in your app */}
      <TodoList />
    </div>
  );
}

export default App;