import Home from "pages/Home";
import Details from "pages/MovieDetails";
import StyledLink from "../StyledLink";
import { Route, Routes } from "react-router-dom";
import MovieSearch from "pages/MovieSearch";


const App = () => {
  return(
    <div>
      <nav>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/movie">Movies</StyledLink>
        <StyledLink to="/search">Search</StyledLink>
      </nav>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:movieId" element={<Details />} />
          <Route path="/search" element={<MovieSearch onSearch={handleSearch} />} />
        </Routes>
      </main>
    </div>
  )
}
export default App;