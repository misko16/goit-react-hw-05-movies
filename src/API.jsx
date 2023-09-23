// 58421809dbb0088b2fcbfd8c4651b065

import axios from "axios";

const BASE_URL = `https://www.themoviedb.org`;
const API_KEY = `58421809dbb0088b2fcbfd8c4651b065`;

export const fetchTrendingMovies = async () => {
    try{
      const response = await axios.get(`${BASE_URL}/trending/get-trending`, {
        params: {
            api_key:API_KEY,
        },
      });

    return response.data.results;
    }
    catch(error){
        throw error;
    }
};

export const fetchMovieDetails = async(movieId) => {
    try{
        const response = await axios.get(`${BASE_URL}/get-movie-details/${movieId}`,{
params:{
    api_key:API_KEY,
        },
    });
return response.data.results;
} catch(error) {
    throw error;
};
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