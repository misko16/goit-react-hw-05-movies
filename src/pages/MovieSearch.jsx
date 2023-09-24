import React, { useState } from "react";

function MovieSearch({ onSearch }) {
  const [search, setSearch] = useState("");

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    onSearch(search);
  };

  return (
    <div>
      <h2>Search for Movies</h2>
      <form onSubmit={handleSearchSubmit}>
        <input
          type="text"
          placeholder="Enter a movie title..."
          value={search}
          onChange={handleSearchChange}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

export default MovieSearch;
