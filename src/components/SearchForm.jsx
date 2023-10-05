import React, { useState } from "react";

const SearchForm = ({ onSearchSubmit }) => {
  const [search, setSearch] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearchSubmit(search);
  };

  const handleInputChange = (event) => {
    setSearch(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter a movie title..."
        value={search}
        onChange={handleInputChange}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;
