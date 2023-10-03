import { fetchTrendingMovies } from "API";
import MovieList from "components/MovieList";
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
      <h2>Popular films for today</h2>
      <MovieList trendingMovies={trendingMovies}/>
    </div>
  );
}

export default Home;
