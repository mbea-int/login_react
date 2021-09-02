import React from "react";
import Forma from "./Forma";

let isLoggedIn = false;

function App() {
  return (
    <div className="container">{isLoggedIn ? <h1>Hello</h1> : <Forma />}</div>
  );
}

export default App;
