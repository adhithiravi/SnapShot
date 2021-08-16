import React from "react";
import Form from "./Form";
import Navigation from "./Navigation";

function Header({ history, handleSubmit }) {
  return (
    <div>
      <h1>SnapShot</h1>
      <Form history={history} handleSubmit={handleSubmit} />
      <Navigation />
    </div>
  );
}

export default Header;
