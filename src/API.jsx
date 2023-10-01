// 58421809dbb0088b2fcbfd8c4651b065

import axios from "axios";

  const BASE_URL = `https://api.themoviedb.org/3`;
  const API_KEY = `58421809dbb0088b2fcbfd8c4651b065`;

  export const handleSearch = async (searchTerm) => {
    try {
      const response = await axios.get(`${BASE_URL}/search/movie`, {
        params: {
          api_key: API_KEY,
          query: searchTerm,
        },
      });

      const searchResults = response.data.results.map((movie) => ({
        ...movie,
        overview: movie.overview.slice(0, 500),
      }));
      console.log("Search results:", searchResults);

      return searchResults;
    } catch (error) {
      if (error.response) {
        console.error("Код статусу помилки:", error.response.status);
        console.error("Додаткова інформація про помилку:", error.response.data);
      } else {
        console.error("Помилка запиту:", error.message);
      }
    }
  };


  export const fetchTrendingMovies = async () => {
      try {
          const response = await axios.get(`${BASE_URL}/trending/movie/day`, {
              params: {
                  api_key: API_KEY,
              },
          });

          return response.data.results;
      } catch (error) {
          throw error;
      }
  };


  export const fetchMovieDetails = async (movieId) => {
      try {
        const response = await axios.get(`${BASE_URL}/movie/${movieId}`, {
          params: {
            api_key: API_KEY,
          },
        });
        return response.data;
      } catch (error) {
        throw error;
      }
    };
    

    export const fetchMovieCredits = async (movieId) => {
      try {
        const response = await axios.get(`${BASE_URL}/movie/${movieId}/credits`, {
          params: {
            api_key: API_KEY,
          },
        });
        return response.data;
      } catch (error) {
        throw error;
      }
    };
    
    
    export const fetchMovieReview = async (movieId) => {
      try {
        const response = await axios.get(`${BASE_URL}/movie/${movieId}/reviews`, {
          params: {
            api_key: API_KEY,
          },
        });
        return response.data.results; // Повертаємо лише results з даних
      } catch (error) {
        throw error;
      }
    };
    