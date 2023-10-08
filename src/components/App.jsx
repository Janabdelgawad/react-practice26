import React, { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [added, setAdded] = useState([]);

  function handleChange(event) {
    const newValue = event.target.value;
    setInput(newValue);
  }

  function handleClick(event) {
    setAdded((prevValue) => {
      return [...prevValue, input];
    });
    setInput("");
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" onChange={handleChange} value={input} />
        <button onClick={handleClick} value={added}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {added.map((todoItem) => (
            <li>{todoItem}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
