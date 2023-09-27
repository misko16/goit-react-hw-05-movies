 import StyledLink from "StyledLink";
import { Outlet } from "react-router-dom";
 const NavigationList = () => {
    return(
       <div>
       <header>
       <nav>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/search">Search</StyledLink>
    </nav>
    </header>
    <Outlet/>
    </div>
        );
    } 
 export default NavigationList;