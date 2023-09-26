 import { Link } from "react-router-dom";

 const ListPopularFilms = ({trendingMovies}) => {
    return(
        <ul>
        {trendingMovies.map((movie) => (
          <li key={movie.id}>
            <Link to={`/movie/${movie.id}`}>{movie.title}</Link>         
          </li>
        ))}
      </ul>
    );
 }
 export default ListPopularFilms;