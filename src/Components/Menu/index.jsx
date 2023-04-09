import React from "react";
import "./style.css";
import {Link } from "react-router-dom";

export const Menu = () => {
  return (
    <nav className='menu'>
      <Link to="/">Home</Link>
      <Link to="/reviews">Reviews</Link>
      <Link to="/articles">Articles</Link>
      <Link to="/movies">Movies</Link>
    </nav>
  );
};
