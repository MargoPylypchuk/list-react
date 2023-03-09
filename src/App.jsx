import React from "react";
import "./App.css";
import Item from "./components/Item";

const list = [
  {
    id: 0,
    content: ["text1", "eweqeq", "rewwrwer"],
  },
  {
    id: 1,
    content: ["text2", "43242"],
  },
  {
    id: 2,
    content: ["text3"],
  },
];

function App() {
  return (
    <div className="app">
      {list.map((item) => (
        <Item id={item.id} content={item.content} key={item.id} />
      ))}
    </div>
  );
}

export default App;
