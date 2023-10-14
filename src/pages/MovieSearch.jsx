import React, { useState, useEffect } from "react";
import SearchBar from "../components/refactoring/SearchBar";
import { handleSearch } from "../API";
import MovieList from "../components/refactoring/MovieList";
import NotFound from "./NotFound";

function MovieSearch() {
  const [searchResults, setSearchResults] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        if (searchQuery && submitted) {
          const results = await handleSearch(searchQuery);
          setSearchResults(results);
        } else {
          setSearchResults([]);
        }
      } catch (error) {
        console.error("Error searching for movies:", error);
      }
    };
    fetchSearchResults();
  }, [searchQuery, submitted]);

  const handleSearchSubmit = (query) => {
    setSearchQuery(query);
    setSubmitted(true);
  };

  return (
    <div>
      <h2>Search for Movies</h2>
      <SearchBar onSearch={handleSearchSubmit} />
  
      {submitted && searchResults.length === 0 ? (
        <NotFound message={`We don't have results`}/>
      ) : (
        <MovieList trendingMovies={searchResults} />
      )}
    </div>
  );
}

export default MovieSearch;
