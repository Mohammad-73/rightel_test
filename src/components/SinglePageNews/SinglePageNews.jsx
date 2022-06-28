import React from "react";
import { useSelector } from "react-redux";
import SinglePageSkeleton from "../SinglePageSkeleton/SinglePageSkeleton";
import classes from "./SinglePageNews.module.scss";
import PostCard from "../PostCard/PostCard";
import { Grid, IconButton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link } from "react-router-dom";
import Moment from "react-moment";

const SinglePageNews = () => {
  const singlePageNews = useSelector((state) => state.singlePageNews);
  const news = useSelector((state) => state.news);
  const { loading, post } = singlePageNews;
  return (
    <div className={classes.root}>
      {loading ? (
        <SinglePageSkeleton />
      ) : (
        <div className={classes.container}>
          <h1>
            <Link to="/">
              <IconButton size="large" aria-label="delete">
                <ArrowBackIcon fontSize="large" />
              </IconButton>
            </Link>
            {post.title}
          </h1>
          <div
            className={classes.newsImage}
            style={{ backgroundImage: `url(${post.urlToImage})` }}
          >
            <div className={classes.overlay}>
              <div className={classes.postContent}>
                <div className={classes.author}>
                  <span>
                    <img
                      src="https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg"
                      alt="avatar"
                      width="50"
                    />
                    <h3>{post.author}</h3>
                  </span>
                  <h3>
                    <Moment format="YYYY/MM/DD hh:mm" date={post.publishedAt} />
                  </h3>
                </div>
                <div className={classes.desc}>
                  <p>{post.description}</p>
                </div>
              </div>
            </div>
          </div>
          <Grid container className={classes.contentContainer}>
            <Grid
              item
              xs={12}
              sm={12}
              md={8}
              lg={8}
              xl={8}
              className={classes.content}
            >
              <p>
                {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(
                  (item, index) => post.content
                )}
              </p>
            </Grid>
            <Grid
              className={classes.otherNews}
              item
              xs={12}
              sm={12}
              md={4}
              lg={4}
              xl={4}
            >
              {news?.items?.data?.articles.slice(0, 4).map((item, index) => (
                <PostCard key={index} item={item} />
              ))}
            </Grid>
          </Grid>
        </div>
      )}
    </div>
  );
};

export default SinglePageNews;
