import React from "react";
import { Outlet, useNavigate } from "react-router-dom";

export const Movies = (props) => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Listed movies categories:</h1>
      {/* if we put /comedy or /horror it will be treted differently */}
      <h3 onClick={() => navigate(`comedy`)}>Comedy</h3>
      <h3 onClick={() => navigate("horror")}>Horror</h3>

      <Outlet />
      {/* <ul>
        {movies.map((movie) => (
          <li key={movie.id}>{movie.movieName}</li>
        ))}
      </ul> */}
    </div>
  );
};

export const HorrorMovies = () => {
  return <h1>Horror Movies:</h1>;
};

export const ComedyMovies = () => {
  return <h1>Comedy Movies:</h1>;
};
