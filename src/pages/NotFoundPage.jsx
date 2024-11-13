import React from "react";
import cloud from "../img/Screenshot 2024-10-31 at 17.44.04.png";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div>
      <Link to="/">Go back HomePage</Link>
      <h1>NotFoundPage</h1>
      <img src={cloud} alt="Not found page " width="360" />
    </div>
  );
};

export default NotFoundPage;
