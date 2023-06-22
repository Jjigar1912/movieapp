import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import Movie from "./Movie";
import InfiniteScroll from "react-infinite-scroll-component";
export default function Card(props) {
  const [movie, setMovies] = useState([]);
  const [searchMovie, setSearchMovie] = useState([]);
  useEffect(() => {
    axios
      .get(process.env.REACT_APP_API)
      .then((response) => setMovies(response.data.results))
      .catch((error) => console.log(error));
  }, []);
  useEffect(() => {
    const x = movie.filter((element) => {
      let name = props.movieName;
      let realName = element.title;
      return realName.toLowerCase().includes(name.toLowerCase());
    });
    setSearchMovie(x);
  }, [props.movieName]);
  return (
    <>
      <div className="movieParent">
        {props.movieName.length == 0 &&
          movie.map((element) => {
            return (
              <Movie
                image={element.backdrop_path}
                title={element.title}
                date={element.release_date}
                vote={element.vote_average}
                id={element.id}
              />
            );
          })}
        {props.movieName.length > 0 &&
          searchMovie.length > 0 &&
          searchMovie.map((element) => {
            return (
              <Movie
                image={element.poster_path}
                title={element.title}
                date={element.release_date}
                vote={element.vote_average}
                id={element.id}
              />
            );
          })}
        {props.movieName.length > 0 && searchMovie.length == 0 && (
          <h1
            style={{
              color: "white",
              fontFamily: "poppins",
              letterSpacing: "1px",
            }}
          >
            Data Not Found
          </h1>
        )}
      </div>
    </>
  );
}
