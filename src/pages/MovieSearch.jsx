import React, { useState } from "react";
import { handleSearch } from "API";
import SearchForm from "components/SearchForm";
import MovieInformation from "components/MovieInformation";

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
      <SearchForm handleSearchSubmit={handleSearchSubmit}
       handleSearchChange={handleSearchChange}
       search={search}/>

      {searchResults.length > 0 ? (
      <MovieInformation searchResults={searchResults}/>
      ) : (
        <p>No results found</p>
      )}
    </div>
  );
}

export default MovieSearch;
