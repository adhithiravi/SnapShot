import React from "react";
import SearchForm from "./SearchForm";
import Navigation from "./Navigation";

function Header({ history, handleSubmit }) {
  return (
    <div>
      <h1>SnapShot</h1>
      <SearchForm history={history} handleSubmit={handleSubmit} />
      <Navigation />
    </div>
  );
}

export default Header;
