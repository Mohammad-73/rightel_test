import logo from "./logo.svg";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { loadPosts } from "./store/news/news.actions";

function App() {
  const news = useSelector((state) => state.news);
  const { loading, items } = news;
  console.log("log>", items);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {/* {items.map((item, index) => (
          <p>{item.title}</p>
        ))} */}

        <button onClick={() => dispatch(loadPosts())}>
          {loading ? "loading..." : "load post"}
        </button>
      </header>
    </div>
  );
}

export default App;
