import React from "react";
import "./style.css";
import { movies } from "../../movie-database";
import { NavLink } from "react-router-dom";

export const MovieList = () => {
  return (
    <nav className="movie-list">
      {movies.map((movie) => (
        <NavLink
          key={movie.id}
          to={`/movies/${movie.id}`}
          className={({ isActive }) =>
            isActive ? "active" : ""
          }
        >
          {movie.title}
        </NavLink>
      ))}
    </nav>
  );
};
