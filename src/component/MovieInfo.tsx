import React from "react";
import Box from "@mui/material/Box";
import "./MovieInfo.css";
import MovieContent from "./MovieContent";
import MovieImage from "./MovieImage";
import MovieDetail from "./MovieDetail";
import { useMovieDetail } from "../store/movies.store";
const MovieInfo = (props: any) => {
  const { toggle } = useMovieDetail();

  return (
    <>
      <Box className={"movie-card"}>
        <MovieImage movieIcon={props.movieIcon} />
        <MovieContent
          movieName={props.movieName}
          movieType={props.movieType}
          movieDirector={props.movieDirector}
          {...props}
        />
      </Box>
      {toggle && <MovieDetail {...props} />}
    </>
  );
};

export default MovieInfo;
