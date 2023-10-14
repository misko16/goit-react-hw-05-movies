import React, { useEffect, useState } from "react";
import { useParams, Link, Outlet } from "react-router-dom"; // Додано Outlet
import { fetchMovieDetails } from "API";
import NavigateButton from "components/refactoring/NavigateButton";

function MovieDetails() {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    fetchMovieDetails(movieId)
      .then((data) => {
        setMovieDetails(data);
      })
      .catch((error) => {
        console.log("Error with movie details:", error);
      });
  }, [movieId]);

  if (!movieDetails) {
    return;
  }

  return (
    <div>
      <NavigateButton/>
      <h1>{movieDetails.title}</h1>
      <img
        src={  
          movieDetails.poster_path 
          ? `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`
        : `https://klike.net/uploads/posts/2019-05/medium/1556775907_2.jpg`
        }
        alt={`${movieDetails.title} Poster`}
      />
      <p>When film was released: {movieDetails.release_date}</p>
      <p>Rating: {movieDetails.vote_average}</p>
      <p>Overview: {movieDetails.overview}</p>
      <p>Genres: {movieDetails.genres.map((genre) => genre.name).join(", ")}</p>
      
      <Link to={`cast`}>Cast</Link>
      <Link to={`reviews`}>Reviews</Link>

      <Outlet />
    </div>
  );
}

export default MovieDetails;
