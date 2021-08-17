import React, { useState } from "react";
import SearchImage from "./images/searchImage";

function SearchForm({ handleSubmit, history }) {
  const [searchEntry, setSearchEntry] = useState("");
  // update search text state
  const updateSearchInput = (e) => {
    setSearchEntry(e.target.value);
  };
  return (
    <form
      className="search-form"
      onSubmit={(e) => handleSubmit(e, history, searchEntry)}
    >
      <input
        type="text"
        name="search"
        placeholder="Search..."
        onChange={updateSearchInput}
        value={searchEntry}
      />
      <button type="submit" className={`search-button ${"active"}`}>
        <SearchImage />
      </button>
    </form>
  );
}

export default SearchForm;
