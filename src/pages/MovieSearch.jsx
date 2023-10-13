import React, { useState, useEffect } from "react";
import SearchBar from "../components/refactoring/SearchBar";
import { handleSearch } from "../API";
import MovieList from "../components/refactoring/MovieList"; // замініть шлях на реальний шлях до вашого файлу MovieList
import NotFound from "./NotFound";

function MovieSearch() {
  const [searchResults, setSearchResults] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        if (searchQuery) {
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
  }, [searchQuery]);

  const handleSearchSubmit = (query) => {
    setSearchQuery(query);
  };

  return (
    <div>
      <h2>Search for Movies</h2>
      <SearchBar onSearch={handleSearchSubmit} />
  
      {searchResults.length > 0 ? (
        <MovieList trendingMovies={searchResults} />
      ) : (
        <NotFound message={`We don't have resaults`}/>  
    )}
    </div>
  );
  
}

export default MovieSearch;
