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
        <p>You are currently logged in as {user}</p>
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
      <footer id="topicLink">
        <a href="https://github.com/OmarSainab/fe-ncnews">GitHub repository</a>
      </footer>
    </div>
  );
}

export default App;
