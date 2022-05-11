import React from "react";
import { Typography, Box } from "@mui/material";
import { useState } from "react";
import "./MovieContent.css";
import DirectorModal from "./DirectorModal";
import { useMovieDetail } from "../store/movies.store";
const MovieContent = (props: any) => {
  const [visible, setVisible] = useState(false);
  const { isToggle } = useMovieDetail();
  const closeModal = () => {
    setVisible(false);
  };
  return (
    <>
      <Box
        className="movie-content"
        onClick={() => {
          isToggle();
        }}
      >
        <Typography variant="h5" component="div" sx={{ fontWeight: 600 }}>
          {props.movieName}
        </Typography>
        <Typography component="div" sx={{ color: "text.disabled" }}>
          {props.movieType}
        </Typography>
        <Typography component="div" onClick={() => setVisible(true)}>
          {props.movieDirector}
        </Typography>
      </Box>
      {visible && (
        <DirectorModal
          directorName={props.movieDirector}
          directorDetails={props.directorDetail}
          onCloseModal={closeModal}
          {...props}
        />
      )}
    </>
  );
};

export default MovieContent;
