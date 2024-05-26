import React from "react";
import ReactDOM from "react-dom/client";
import Counter from "./components/Counter";
import Title from "./components/Title";


let count1 = 0;
setInterval(() => {
  ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <Title />
      <Counter seconds={count1++}/>
    </React.StrictMode>
  );
}, 1000);
