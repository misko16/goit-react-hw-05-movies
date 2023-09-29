import React, { useEffect, useState } from "react";
import { useParams, Link, Outlet } from "react-router-dom"; // Додано Outlet
import { fetchMovieDetails } from "API";

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
    return <div>You have a really big problem if you see this message. Press button F12</div>;
  }

  return (
    <div>
      <h1>{movieDetails.title}</h1>
      <img
        src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
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
