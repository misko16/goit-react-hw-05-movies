import { fetchTrendingMovies } from "API";
import { useEffect, useState } from "react";

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
      <h1>Films which are popular today</h1>
      <ul>
        {trendingMovies.map((movie) => (
          <li key={movie.id}>
            <h2>{movie.title}</h2>
            <p>Year when film was released: {movie.release_date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
