import { fetchTrendingMovies } from "API";
import ListPopularFilms from "components/ListPopularFilms";
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
      <ListPopularFilms trendingMovies={trendingMovies}/>
    </div>
  );
}

export default Home;
