import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Movie(props) {
  const navigate = useNavigate();
  const openMovie = () => {
    navigate(`/singleMovie/${props.id}/${props.title}`);
  };
  return (
    <div className="movie" onClick={() => openMovie()}>
      <img
        src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${props.image}`}
        alt="Image"
      />
      <h3>{props.title}</h3>
      <h3>Realease Date : {props.date}</h3>
      <h3>Voting : {props.vote}</h3>
    </div>
  );
}
