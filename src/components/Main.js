import React from "react";
import Movie from "./Movie";
import MovieBox from "./MovieBox";
import App from "../App";
import SingleMovie from "./SingleMovie";
import { BrowserRouter, Route, Routes } from "react-router-dom";
export default function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="singleMovie/:id/:movie" element={<SingleMovie />}></Route>
        <Route path="/*" element={<h1>Page Not</h1>} />
      </Routes>
    </BrowserRouter>
  );
}
