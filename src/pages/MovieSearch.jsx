import React, { useState, useEffect } from "react";
import SearchForm from "components/SearchForm";
import MovieInformation from "components/MovieInformation";
import { useSearchParams } from "react-router-dom";

function MovieSearch({ onSearch }) {
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();

    setSearchParams({ query: search });
  };

  useEffect(() => {
    setSearchResults([]);
  }, []);

  return (
    <div>
      <h2>Search for Movies</h2>
      <SearchForm
        handleSearchSubmit={handleSearchSubmit}
        handleSearchChange={handleSearchChange}
        search={search}
      />

      {searchResults.length > 0 ? (
        <MovieInformation searchResults={searchResults} />
      ) : (
        <p>No results found</p>
      )}
    </div>
  );
}

export default MovieSearch;
