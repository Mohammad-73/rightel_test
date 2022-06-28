import React from "react";
import { Routes, Route } from "react-router-dom";
import NewsPage from "../NewsPage/NewsPage";
import SinglePageNews from "../SinglePageNews/SinglePageNews";

const Content = () => {
  return (
    <div>
      <Routes>
        <Route path="/" exact element={<NewsPage />} />
        <Route path="/single-post" exact element={<SinglePageNews />} />
      </Routes>
    </div>
  );
};

export default Content;
