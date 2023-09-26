import React, { useState } from "react";
import { handleSearch } from "API";

function MovieSearch({ onSearch }) {
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const handleSearchSubmit = async (event) => {
    event.preventDefault();
    const results = await handleSearch(search);
    setSearchResults(results);

    if (onSearch) {
      onSearch(results);
    }
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

      {searchResults.length > 0 ? (
        <ul>
          {searchResults.map((movie) => (
            <li key={movie.id}>
              <h3>{movie.title}</h3>
              <p>{movie.overview}</p>
              {movie.poster_path && (
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                />
              )}
            </li>
          ))}
        </ul>
      ) : (
        <p>No results found</p>
      )}
    </div>
  );
}

export default MovieSearch;
