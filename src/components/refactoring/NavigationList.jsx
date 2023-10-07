import StyledLink from "StyledLink";
import { Outlet } from "react-router-dom";
import { Suspense } from "react";

const NavigationList = () => {
  return (
    <div>
      <header>
        <nav>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/movie">Search</StyledLink>
        </nav>
      </header>
      <Suspense fallback={<div>Waiting for loading ...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default NavigationList;
