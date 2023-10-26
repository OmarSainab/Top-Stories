import ArticlesList from "./components/Articles/ArticlesList";
import SingleArticle from "./components/SingleArticle/SingleArticle";
import { useContext } from "react";
import { UserContext } from "./contexts/Users";

import { Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  const { user } = useContext(UserContext);

  return (
    <div className="App">
      <header>
        <p>Logged in as {user}</p>
        <h1><a href="/">Top Stories</a></h1>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<ArticlesList />}></Route>
          <Route
            path="/articles/:article_id"
            element={<SingleArticle />}
          ></Route>
          <Route path="/topics/:topic" element={<ArticlesList />}></Route>
        </Routes>
      </main>
      <footer id="topicLink">
        <a href="https://github.com/OmarSainab/fe-ncnews">
          https://github.com/OmarSainab/Top-Stories
        </a>
      </footer>
    </div>
  );
}

export default App;
