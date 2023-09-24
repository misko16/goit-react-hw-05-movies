// 58421809dbb0088b2fcbfd8c4651b065

import axios from "axios";

const BASE_URL = `https://api.themoviedb.org/3`;
const API_KEY = `58421809dbb0088b2fcbfd8c4651b065`;

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
  

export const fetchMovieCredits = async(movieId) => {
try{
    const response = await axios.get(`${BASE_URL}/get-movie-credits/${movieId}`,{
    params:{
api_key: API_KEY,
        },
    });
    return response.data.results;
}
catch(error){
    throw error;
}
};

export const fetchMovieReview = async(movieId) => {
    try{
        const response = await axios.get(`${BASE_URL}/get-movie-reviews/${movieId}`,{
            params:{
                api_key:API_KEY,
            },
        });
        return response.data.results;
    }
    catch(error){
        throw error;
    }
}