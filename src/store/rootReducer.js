import { combineReducers } from "redux";
import newsReducer from "./news/news.reducer";
import singlePageNewsReducer from "./singlePageNews/singlePageNews.reducer";

const rootReducer = combineReducers({
  news: newsReducer,
  singlePageNews: singlePageNewsReducer,
});

export default rootReducer;
