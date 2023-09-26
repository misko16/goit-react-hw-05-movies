const SearchForm = ({handleSearchSubmit, handleSearchChange, search}) => {
    return(
        <form onSubmit={handleSearchSubmit}>
        <input
          type="text"
          placeholder="Enter a movie title..."
          value={search}
          onChange={handleSearchChange}
        />
        <button type="submit">Search</button>
      </form>
    );
};
export default SearchForm;