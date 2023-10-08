import React, { useState } from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

ReactDOM.render(<App />, document.getElementById("root"));

//3. The <ul> should display all the array items as <li>s

// setItem((prevValue)=>{
//  return {
//   ...prevValue,
//   [li] : name
//  }
// })

// const {add, setAdd} useState("");
// function handleClick(event){
//   const {array} = {
//     setAdd(event.target.value);
//   }
// }
// onclick={handleClick} value={add}
