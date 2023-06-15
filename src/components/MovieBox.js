import React, { useEffect, useState } from "react";
import Search from "./Search";
import Card from "./Card";
export default function MovieBox() {
  const [movieName, setMovieName] = useState("");
  const getSearchData = (data) => {
    setMovieName(data);
  };
  return (
    <>
      <Search getSearchData={getSearchData} />
      <Card movieName={movieName} />
    </>
  );
}
