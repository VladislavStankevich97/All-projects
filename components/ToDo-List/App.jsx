import React from "react";
import List from "./List";
import AddTodo from "./AddTodo";

function App() {
  return (
    <div>
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <AddTodo />
        <List />
      </div>
    </div>
  );
}

export default App;
