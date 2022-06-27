import { Grid } from "@mui/material";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadPosts, startLoading } from "../../store/news/news.actions";
import PostSkeleton from "../PostSkeleton/PostSkeleton";
import classes from "./NewsPage.module.scss";

const NewsPage = () => {
  const news = useSelector((state) => state.news);
  const { loading, items } = news;
  console.log("log>", items);
  const dispatch = useDispatch();
  const [reloadPosts, setReloadPosts] = useState(false);

  useEffect(() => {
    if (reloadPosts) {
      dispatch(startLoading());
      dispatch(loadPosts());
    }
    setReloadPosts(false);
  }, [reloadPosts]);

  return (
    <div className={classes.root}>
      {loading ? (
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((skeleton, inx) => (
            <Grid item xs={12} sm={12} md={6} lg={3}>
              <PostSkeleton />
            </Grid>
          ))}
        </Grid>
      ) : (
        items?.data?.posts?.map((item, index) => <h2>{item.title}</h2>)
      )}
      <button onClick={() => setReloadPosts(true)}>reload</button>
    </div>
  );
};

export default NewsPage;
