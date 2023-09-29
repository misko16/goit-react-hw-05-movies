import Home from "pages/Home";
import { Route, Routes } from "react-router-dom";
import MovieSearch from "pages/MovieSearch";
import NavigationList from "./NavigationList";
import NotFound from "pages/NotFound";
import { lazy, Suspense } from "react";

const MovieDetails = lazy(() => import('../pages/MovieDetails'));
const Cast = lazy(() => import('./Cast'));
const Reviews = lazy(() => import('./Reviews'));

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<NavigationList />}>
          <Route index element={<Home />} />
          <Route path="/movie" element={<MovieSearch />} />
          <Route
            path="/movie/:movieId"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <MovieDetails />
              </Suspense>
            }>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
