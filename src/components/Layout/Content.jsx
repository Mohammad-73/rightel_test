import React from "react";
import { Routes, Route } from "react-router-dom";
import NewsPage from "../NewsPage/NewsPage";

const Content = () => {
  return (
    <div>
      <Routes>
        <Route path="/" exact element={<NewsPage />} />
        {/* <Route path="/student" exact element={<StudentPage />} /> */}
      </Routes>
    </div>
  );
};

export default Content;
