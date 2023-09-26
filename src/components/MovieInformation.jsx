const MovieInformation = ({searchResults}) => {
    return(
        <ul>
        {searchResults.map((movie) => (
          <li key={movie.id}>
            <h3>{movie.title}</h3>
            <p>{movie.overview}</p>
            {movie.poster_path && (
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
              />
            )}
          </li>
        ))}
      </ul>
    );
}
export default MovieInformation;