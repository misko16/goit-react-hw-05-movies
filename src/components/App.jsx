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
          <Route></Route>
          <Route></Route>


        </Routes>
      </main>
    </div>
  )
}
export default App;