import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { useMovieStore } from "../store/movies.store";
const MovieDetail = (props: any) => {
  const { success, isSuccess } = useMovieStore();
  return (
    <Box sx={{ width: "470px", marginLeft: 2 }}>
      <Typography>{props.movieDetail}</Typography>
      <Button variant="contained" sx={{ mt: 2 }} onClick={() => isSuccess()}>
        ADD TO FAVOURITE
      </Button>
    </Box>
  );
};

export default MovieDetail;
