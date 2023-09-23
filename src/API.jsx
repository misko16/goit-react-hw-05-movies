// 58421809dbb0088b2fcbfd8c4651b065
import axios from "axios";

const BASE_URL = `https://www.themoviedb.org`; //тут мб підправити потрібно буде
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

export const fetchMovieDetails = async() => {
    try{
        const response = await axios.get(`${BASE_URL}/movies/get-movie-details`,{
params:{
    api_key:API_KEY,
        },
    });
return response.data.results;
} catch(error) {
    throw error;
};
};

export const fetchMovieCredits = async() => {
try{
    const response = await axios.get(`${BASE_URL}/movies/get-movie-credits`,{
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

export const fetchMovieReview = async() => {
    try{
        const response = await axios.get(`${BASE_URL}/movies/get-movie-reviews`,{
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