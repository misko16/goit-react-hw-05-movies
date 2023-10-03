import React, { useState, useEffect } from "react";
import SearchForm from "components/SearchForm";
import MovieList from "components/MovieList"; 
import { useSearchParams } from "react-router-dom";
import { handleSearch } from "../API";

function MovieSearch() {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSearchChange = (event) => {
    setSearchParams({ search: event.target.value });
  };

  const handleSearchSubmit = async (event) => {
    event.preventDefault();
    const searchValue = searchParams.get("search");
    
    if (searchValue.trim() === "") {
      return;
    }

    try {
      const results = await handleSearch(searchValue);
      setMovies(results);
    } catch (error) {
      console.error("Error searching for movies:", error);
    }
  };

  useEffect(() => {
    setMovies([]);
  }, [searchParams]);

  return (
    <div>
      <h2>Search for Movies</h2>
      <SearchForm
        handleSearchSubmit={handleSearchSubmit}
        handleSearchChange={handleSearchChange}
      />

      {movies.length > 0 ? (
        <MovieList trendingMovies={movies} />
      ) : (
        <p>No results found</p>
      )}
    </div>
  );
}

export default MovieSearch;
