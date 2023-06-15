import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Styles from "../components/SingleMovie.module.scss";
import axios from "axios";
import { Link } from "react-router-dom";
export default function SingleMovie() {
  const [movie, setMovie] = useState({});
  const parameters = useParams();
  const navigate = useNavigate();
  let url = process.env.REACT_APP_SINGLE_MOVIE_API;
  let key = process.env.REACT_APP_API_KEY;
  url = `${url}/${parameters.id}-${parameters.movie}?api_key=${key}`;
  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setMovie(response.data);
      })
      .catch((error) => console.log(error.message));
  }, []);
  return (
    <div className={Styles.container}>
      <div className={Styles.parent}>
        <div className={Styles.image}>
          <Link
            to={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${movie.backdrop_path}`}
          >
            <img
              src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${movie.backdrop_path}`}
            />
          </Link>
        </div>
        <div className={Styles.content}>
          <h1>{`Title : ${movie.original_title}`}</h1>
          <p>
            <b>Overview :</b> {movie.overview}
          </p>
          <h3>
            <b>Revenue : </b> <span>{movie.revenue}</span>
          </h3>
          <h2>
            <b>Budget : </b>
            <span>{movie.budget}</span>
          </h2>
          <p>
            <b>Rating : </b>
            {movie.vote_average}
          </p>
        </div>
      </div>
    </div>
  );
}
