import React, { useState, useEffect } from "react";
import SearchForm from "components/SearchForm";
import MovieInformation from "components/MovieInformation";
import { useSearchParams } from "react-router-dom";
import { handleSearch } from "../API";

function MovieSearch() {
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [searchParams] = useSearchParams();

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  useEffect(() => {
    setSearchResults([]);

    const performSearch = async () => {
      try {
        const results = await handleSearch(search);
        setSearchResults(results);
      } catch (error) {
        console.error("Error searching for movies:", error);
      }
    };
    performSearch();
  }, [search, searchParams]);

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    searchParams.set("query", search);
  };

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
