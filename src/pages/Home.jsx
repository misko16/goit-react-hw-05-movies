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
      <h2>Popular films for today</h2>
      <ul>
        {trendingMovies.map((movie) => (
          <li key={movie.id}>
            <p>
            <Link to={`/movie/${movie.id}`}>{movie.title}</Link>         
             </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
