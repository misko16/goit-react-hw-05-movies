import { fetchMovieCredits } from "API";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Cast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(true); // Додайте стан для відстеження завантаження

  useEffect(() => {
    fetchMovieCredits(movieId)
      .then((data) => {
        setCast(data.Cast);
        setLoading(false); // При успішному завантаженні встановлюємо loading в false
      })
      .catch((error) => {
        console.log('Error with cast', error);
        setLoading(false); // При помилці також встановлюємо loading в false
      });
  }, [movieId, setCast]);

  if (loading) {
    return <div>Loading...</div>; // Показуємо "Loading..." поки завантажується інформація
  }

  return (
    <div>
      <h2>Cast</h2>
      {cast.length > 0 ? (
        <ul>
          {cast.map((actor) => (
            <li key={actor.id}>
              <p>Actors name: {actor.name}</p>
              <p>Actor character: {actor.character}</p>
            </li>
          ))}
        </ul>
      ) : (
        <div>No cast available</div> // Повідомлення, якщо акторський склад відсутній
      )}
    </div>
  );
}

export default Cast;

