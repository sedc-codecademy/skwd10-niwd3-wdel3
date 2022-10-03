import React from "react";
import { Link, NavLink } from "react-router-dom";
import { NavBar, NavLinks } from "./styles";

export const Header = () => {
  // This approach is bad. a=href maybe does the job but it refreshes the page

  // return (
  //   <nav className="header">
  //     <h1>Logo</h1>
  //     <ul>
  //       <a href="/">
  //         <li>Home</li>
  //       </a>

  //       <a href="/recipes">
  //         <li>Recipes</li>
  //       </a>

  //       <a href="/add-recipe">
  //         <li>Add Recipe</li>
  //       </a>
  //     </ul>
  //   </nav>
  // );

  return (
    <NavBar>
      <h1>Logo</h1>
      {/* <NavLinks>
        <Link to="/">
          <li>Home</li>
        </Link>

        <Link to="/recipes">
          <li>Recipes</li>
        </Link>

        <Link to="/add-recipe">
          <li>Add Recipe</li>
        </Link>
      </NavLinks> */}

      {/* NAV LINKS BELOW */}
      <NavLinks>
        <NavLink
          style={({ isActive }) => ({
            color: isActive ? "magenta" : "black",
          })}
          to="/"
          // if we do not put end attribute '/' will match all routes :)
          end
        >
          <li>Home</li>
        </NavLink>

        <NavLink
          style={({ isActive }) => ({
            color: isActive ? "magenta" : "black",
          })}
          to="/recipes"
        >
          <li>Recipes</li>
        </NavLink>

        <NavLink
          style={({ isActive }) => ({
            color: isActive ? "magenta" : "black",
          })}
          to="/add-recipe"
        >
          <li>Add Recipe</li>
        </NavLink>
      </NavLinks>
    </NavBar>
  );
};
