const CastList = ({cast}) => {
    return(
         <ul>
          {cast.map((actor) => (
            <li key={actor.id}>
              {actor.profile_path ? (
                <img src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`} alt={`${actor.name}'s profile`} />
              ) : (
                <div>No profile image available</div>
              )}
              <p>Actors name: {actor.name}</p>
              <p>Actor character: {actor.character}</p>
            </li>
          ))}
        </ul>
    );
} 
export default CastList;