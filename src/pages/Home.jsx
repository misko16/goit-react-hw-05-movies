import { fetchTrendingMovies } from "API";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    fetchTrendingMovies()
      .then((data) => {
        setTrendingMovies(data);
      })
      .catch((error) => {
        console.log('You have an error brother', error);
      });
  }, []);

  return (
    <div>
      <ul>
        {trendingMovies.map((movie) => (
          <li key={movie.id}>
            <h2>
            <Link to={`/movie/${movie.id}`}>{movie.title}</Link>          </h2>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
