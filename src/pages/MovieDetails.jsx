import { fetchMovieDetails } from "API";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Details() {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    fetchMovieDetails(movieId)
      .then((data) => {
        setMovieDetails(data);
      })
      .catch((error) => {
        console.log("Error fetching movie details:", error);
      });
  }, [movieId]);

  if (!movieDetails) {
    return <div>Idiot</div>;
  }

  return (
    <div>
      <h1>{movieDetails.title}</h1>
      <img
        src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
        alt={`${movieDetails.title} Poster`}/>
      <p>When film was released: {movieDetails.release_date}</p>
      <p>Rating: {movieDetails.vote_average}</p>
      <p>Overview: {movieDetails.overview}</p>
      <p>Genres: {movieDetails.genres.map((genre) => genre.name).join(', ')}</p>
    </div>
  );
}

export default Details;
