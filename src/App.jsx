import Nav from "./components/Nav";
import ArticlesList from "./components/Articles/ArticlesList";
import SingleArticle from "./components/SingleArticle/SingleArticle";


import { Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Nav />
      <header>
        <h1>Top Stories</h1>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<ArticlesList />}></Route>
          <Route path="/articles" element={<allArticles />}></Route>
          <Route path="/articles/:article_id" element={<SingleArticle />}></Route>
          <Route path="/topics/:topic" element={<ArticlesList />}></Route>
          
        </Routes>
      </main>
    </div>
  );
}

export default App;
