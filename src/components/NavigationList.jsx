 import StyledLink from "StyledLink";
import { Outlet } from "react-router-dom";
import { Suspense } from "react";
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
    <Suspense fallback={<div>Waiting for loading ...</div>}/>
    </div>
        );
    } 
 export default NavigationList;