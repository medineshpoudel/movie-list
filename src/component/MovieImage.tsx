import React from "react";
import { Box } from "@mui/material";
const MovieImage = (props: any) => {
  const icon = props.movieIcon.toString();

  return (
    <Box
      component="img"
      sx={{ width: "40%", height: 150 }}
      alt="movie-img"
      src={icon}
    />
  );
};

export default MovieImage;
