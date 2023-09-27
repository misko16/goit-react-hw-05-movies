import Home from "pages/Home";
import Details from "pages/MovieDetails";
import { Route, Routes } from "react-router-dom";
import MovieSearch from "pages/MovieSearch";
import { handleSearch } from "API";
import NavigationList from "./NavigationList";


const App = () => {
  return(
    <div>
      
    <NavigationList/>
      <main>
        <Routes>
          <Route path="/" element={<NavigationList />} />
          <Route index element={<Home />} />
          <Route path="/movie/:movieId" element={<Details />} />
          <Route path="/search" element={<MovieSearch onSearch={handleSearch}/>} />
        </Routes>
      </main>
    </div>
  )
}
export default App;