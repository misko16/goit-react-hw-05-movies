import React, { useState, useEffect } from "react";
import SearchForm from "components/SearchForm";
import MovieInformation from "components/MovieInformation";
import { useSearchParams } from "react-router-dom";
import { handleSearch } from "../API";

function MovieSearch() {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSearchChange = (event) => {
    setSearchParams({ search: event.target.value });
  };

  useEffect(() => {
    setMovies([]);

    const searchValue = searchParams.get("search") || "";

    const performSearch = async () => {
      try {
        const results = await handleSearch(searchValue);
        setMovies(results);
      } catch (error) {
        console.error("Error searching for movies:", error);
      }
    };
    performSearch();
  }, [searchParams]);

  return (
    <div>
      <h2>Search for Movies</h2>
      <SearchForm
        handleSearchSubmit={() => {}}
        handleSearchChange={handleSearchChange}
        search={searchParams.get("search") || ""}
      />

      {movies.length > 0 ? (
        <MovieInformation movieResults={movies} />
      ) : (
        <p>No results found</p>
      )}
    </div>
  );
}

export default MovieSearch;

