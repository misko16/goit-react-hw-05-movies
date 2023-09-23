import Home from "pages/Home";
import StyledLink from "../StyledLink";
import { Route, Routes } from "react-router-dom";


const App = () => {
  return(
    <div>
      <nav>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/movies">Movies</StyledLink>
      </nav>
      <main>
        <Routes>
          <Route path="/" element={ <Home/>}></Route>
          <Route></Route>
        </Routes>
      </main>
    </div>
  )
}
export default App;