const CastList = ({ cast }) => {
  const placeholderImageURL = 'https://klike.net/uploads/posts/2019-05/medium/1556775907_2.jpg'; 
  return (
    <ul>
      {cast.map((actor) => (
        <li key={actor.id}>
          {actor.profile_path ? (
            <img
              src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
              alt={`${actor.name}'s profile`}
            />
          ) : (
            <img
              src={placeholderImageURL}
              alt={`Placeholder for ${actor.name}'s profile`}
            />
          )}
          <p>Actors name: {actor.name}</p>
          <p>Actor character: {actor.character}</p>
        </li>
      ))}
    </ul>
  );
};

export default CastList;
