import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";

function SearchBar({ onSearch }) {
  const [searchText, setSearchText] = useState("");
  const [, setParams] = useSearchParams();

  const handleInputChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const encodedSearchText = encodeURIComponent(searchText.trim());
    setParams({ query: encodedSearchText });
    onSearch(encodedSearchText);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={searchText}
        onChange={handleInputChange}
        placeholder="Type name here"
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchBar;
