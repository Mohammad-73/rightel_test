import React from "react";
import swrImage from "../../assets/images/something_went_wrong.png";
import classes from "./OnErrorPost.module.scss";

import Button from "@mui/material/Button";
const OnErrorPost = ({ handleReloadPosts }) => {
  return (
    <div className={classes.root}>
      <h3>Something went wrong!</h3>
      <img src={swrImage} alt="Something went wrong!" />
      <Button onClick={handleReloadPosts} variant="contained">
        Try again
      </Button>
    </div>
  );
};

export default OnErrorPost;
