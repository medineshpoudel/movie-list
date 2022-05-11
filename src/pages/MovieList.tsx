import React from "react";
import Box from "@mui/material/Box";
import MovieInfo from "../component/MovieInfo";
import Snackbar from "@mui/material/Snackbar";
import { Alert } from "@mui/material";
import { useMovieStore } from "../store/movies.store";
import { movies } from "./movies";

const MovieList = () => {
  const { isSuccess, success, dissolveSuccess } = useMovieStore();

  return (
    <Box
      sx={{
        margin: "100px auto",
        width: "500px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {movies.map((movie) => (
        <>
          <MovieInfo
            movieName={movie.movieName}
            movieType={movie.movieType}
            movieDirector={movie.movieDirector}
            directorDetail={movie.directorDetail}
            movieDetail={movie.movieDetail}
            movieIcon={movie.movieIcon}
            directorImage={movie.directorImage}
          />
        </>
      ))}
      {success && (
        <Snackbar
          open={success}
          autoHideDuration={6000}
          onClose={() => dissolveSuccess}
          sx={{
            marginLeft: "500px",
            width: "500px",
          }}
        >
          <Alert
            onClose={() => dissolveSuccess()}
            severity="success"
            sx={{ width: "100%", background: "green", color: "white" }}
          >
            Added To Favourite
          </Alert>
        </Snackbar>
      )}
    </Box>
  );
};

export default MovieList;
