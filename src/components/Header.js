import React from "react";
import SearchForm from "./SearchForm";
import Navigation from "./Navigation";

function Header({ handleSubmit }) {
  return (
    <div>
      <h1>SnapShot</h1>
      <SearchForm handleSubmit={handleSubmit} />
      <Navigation />
    </div>
  );
}

export default Header;
