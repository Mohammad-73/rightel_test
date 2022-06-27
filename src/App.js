import logo from "./logo.svg";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { loadPosts, startLoading } from "./store/news/news.actions";
import Layout from "./components/Layout/Layout";

function App() {
  const news = useSelector((state) => state.news);
  const { loading, items } = news;
  console.log("log>", items);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <Layout />
    </div>
  );
}

export default App;
