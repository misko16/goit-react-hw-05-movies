import React, { useState, useEffect } from "react";
import SearchForm from "components/refactoring/SearchForm";
import MovieList from "components/refactoring/MovieList"; 
import { useSearchParams } from "react-router-dom";
import { handleSearch } from "../API";

function MovieSearch() {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const fetchMovies = async (searchText, page) => {
      try {
        const results = await handleSearch(searchText, page);
        setMovies(results);
      } catch (error) {
        console.error("Error searching for movies:", error);
      }
    };

    const query = searchParams.get("query");
    const page = searchParams.get("page");

    if (query) {
      fetchMovies(query, page);
    } else {
      setMovies([]);
    }
  }, [searchParams]);

  return (
    <div>
      <h2>Search for Movies</h2>
      <SearchForm onSearchSubmit={setSearchParams} />

      {movies.length > 0 ? (
        <MovieList trendingMovies={movies} />
      ) : (
        <p>No results found</p>
      )}
    </div>
  );
}

export default MovieSearch;
