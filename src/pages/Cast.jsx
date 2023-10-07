import { fetchMovieCredits } from "API";
import CastList from "components/refactoring/CastList";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Cast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMovieCredits(movieId)
      .then((data) => {
        setCast(data.cast);
        setLoading(false);
      })
      .catch((error) => {
        console.log('Error with cast', error);
        setLoading(false);
      });
  }, [movieId, setCast]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Cast</h2>
      {cast && cast.length > 0 ? (
      <CastList cast={cast}/>
      ) : (
        <div>No cast available</div>
      )}
    </div>
  );
}

export default Cast;
