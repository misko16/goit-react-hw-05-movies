import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

const NavigationList = lazy(() => import("./refactoring/NavigationList"));
const Home = lazy(() => import("../pages/Home"));
const MovieSearch = lazy(() => import("../pages/MovieSearch"));
const MovieDetails = lazy(() => import("../pages/MovieDetails"));
const Cast = lazy(() => import("../pages/Cast"));
const Reviews = lazy(() => import("../pages/Reviews"));
const NotFound = lazy(() => import("../pages/NotFound"));

const App = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<NavigationList />}>
            <Route index element={<Home />} />
            <Route path="/movie" element={<MovieSearch />} />
            <Route path="/movie/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast/>} />
            <Route path="reviews" element={<Reviews/>} />
            </Route>
          </Route>
          <Route path="*" element={<NotFound message={`Pleace return to home page`}/>} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;

