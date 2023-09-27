import React, { useState, useEffect } from "react";
import { handleSearch } from "API";
import SearchForm from "components/SearchForm";
import MovieInformation from "components/MovieInformation";
import { useSearchParams } from "react-router-dom";

function MovieSearch({ onSearch }) {
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [, setSearchParams] = useSearchParams();

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  useEffect(() => {
    const fetchSearchResults = async () => {
      const results = await handleSearch(search);
      setSearchResults(results);

      if (onSearch) {
        onSearch(results);
      }

      // Оновлюємо параметри URL з використанням useSearchParams
      setSearchParams({ query: search });
    };

    // Викликаємо функцію fetchSearchResults при завантаженні компоненту і при зміні параметрів URL
    fetchSearchResults();
  }, [search, onSearch, setSearchParams]);

  return (
    <div>
      <h2>Search for Movies</h2>
      <SearchForm
        handleSearchSubmit={handleSearchChange}
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
