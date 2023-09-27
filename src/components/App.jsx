import Home from "pages/Home";
import Details from "pages/MovieDetails";
import { Route, Routes } from "react-router-dom";
import MovieSearch from "pages/MovieSearch";
import { handleSearch } from "API";
import NavigationList from "./NavigationList";
import NotFound from "pages/NotFound";
import MovieInformation from "./MovieInformation";


const App = () => {
  return(
    <div>
    <NavigationList/>
        <Routes>
          <Route path="/" element={<NavigationList />} />
          <Route index element={<Home />} />
          <Route path="/trending/get-trending" element={<Details/>}/>


            <Route path="/movie" element={<Details/>}/>  
            <Route path="/movie/:movieId" element={<MovieInformation />} />
            <Route path="/movies/get-movie-credits" element/>
            <Route path="/movies/get-movie-reviews" element/>

          <Route path="/search/search-movies" element={<MovieSearch onSearch={handleSearch}/>} />
         
          <Route path="*" element={<NotFound/>}></Route>
        </Routes>   
         </div>
  )
}
export default App;