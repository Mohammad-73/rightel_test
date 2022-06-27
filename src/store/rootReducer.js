import { combineReducer } from "redux";
import newsReducer from "./news/news.reducer";

const rootReducer = combineReducer({ news: newsReducer });

export default rootReducer;
