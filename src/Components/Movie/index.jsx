import React from "react";
import "./style.css";
import { useParams } from "react-router-dom";
import { movies } from "../../movie-database.js";

export const Movie = () => {
  const { id } = useParams();
  const movieDetail = movies.find((movie) => movie.id == id);
  return (
    <div>
      <h2>{movieDetail.title}</h2>
      <h4>
        {movieDetail.director}, {movieDetail.year}
      </h4>
      <p>{movieDetail.storyline}</p>
      <img src={movieDetail.poster} alt={`${movieDetail.title}.img`} />
    </div>
  );
};
