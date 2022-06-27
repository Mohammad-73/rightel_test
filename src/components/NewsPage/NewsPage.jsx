import { Grid } from "@mui/material";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadPosts, startLoading } from "../../store/news/news.actions";
import OnErrorPost from "../OnErrorPost/OnErrorPost";
import PostSkeleton from "../PostSkeleton/PostSkeleton";
import PostCard from "../PostCard/PostCard";
import classes from "./NewsPage.module.scss";
import PaginationRounded from "../Pagination/Pagination";
import usePagination from "../../hooks/usePagination";

const NewsPage = () => {
  const dispatch = useDispatch();
  const news = useSelector((state) => state.news);
  const { loading, items, error, searchQuery } = news;
  const [reloadPosts, setReloadPosts] = useState(true);
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(24);
  const _DATA = usePagination(items?.data?.articles, perPage);

  useEffect(() => {
    dispatch(startLoading());
    dispatch(loadPosts(searchQuery));
  }, [reloadPosts, searchQuery]);

  const handleReloadPosts = () => {
    setReloadPosts(!reloadPosts);
  };

  const handlePageChange = (e, p) => {
    setPage(p);
    _DATA.jump(p);
  };

  return (
    <div className={classes.root}>
      {error ? (
        <OnErrorPost handleReloadPosts={handleReloadPosts} />
      ) : loading ? (
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((skeleton, inx) => (
            <Grid item xs={12} sm={12} md={6} lg={3}>
              <PostSkeleton />
            </Grid>
          ))}
        </Grid>
      ) : (
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {_DATA?.currentData()?.map((item, index) => (
            <Grid item xs={12} sm={12} md={6} lg={3}>
              <PostCard item={item} />
            </Grid>
          ))}
          <PaginationRounded
            perPage={perPage}
            count={items?.data?.articles}
            page={page}
            handlePageChange={handlePageChange}
            size="large"
            variant="outlined"
            shape="rounded"
          />
        </Grid>
      )}
    </div>
  );
};

export default NewsPage;
