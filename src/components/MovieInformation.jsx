import React from "react";
import { Link } from "react-router-dom";

const MovieInformation = ({ movieResults }) => {
  return (
    <ul>
      {movieResults.map((movie) => (
        <li key={movie.id}>
          <h3>
            <Link to={`/movie/${movie.id}`}>{movie.title}</Link>
          </h3>
        </li>
      ))}
    </ul>
  );
};

export default MovieInformation;
