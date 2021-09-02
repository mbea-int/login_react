import React from "react";
import Input from "./Input";

function Forma() {
  return (
    <form className="form">
      <Input type="text" placeholder="Name" />
      <Input type="password" placeholder="Password" />
      <button type="submit">Login</button>
    </form>
  );
}
export default Forma;
