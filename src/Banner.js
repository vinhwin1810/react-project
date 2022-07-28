import React, { useEffect, useState } from "react";
import instance from "./axios";
import requests from "./requests";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await instance.get(requests.fetchNetflixOriginals);
      setMovie(request.data.results);
      return request;
    }
    fetchData();
  }, []);

  console.log(movie);

  return <header></header>;
}

export default Banner;
