import React, { useState, useEffect, useRef } from "react";
import SearchForm from "components/SearchForm";
import MovieList from "components/MovieList"; 
import { useSearchParams } from "react-router-dom";
import { handleSearch } from "../API";

function MovieSearch() {
  const [movies, setMovies] = useState([]);
  const searchParams = useSearchParams();
  const fetchSearchSubmitRef = useRef();

  useEffect(() => {
    fetchSearchSubmitRef.current = async (searchText) => {
      try {
        const results = await handleSearch(searchText);
        setMovies(results);
      } catch (error) {
        console.error("Error searching for movies:", error);
      }
    };

    if (searchParams.get("search")) {
      fetchSearchSubmitRef.current(searchParams.get("search"));
    } else {
      setMovies([]);
    }
  }, [searchParams]);

  return (
    <div>
      <h2>Search for Movies</h2>
      <SearchForm onSearchSubmit={fetchSearchSubmitRef.current} />

      {movies.length > 0 ? (
        <MovieList trendingMovies={movies} />
      ) : (
        <p>No results found</p>
      )}
    </div>
  );
}

export default MovieSearch;
