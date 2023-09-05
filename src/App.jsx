import { useState } from "react";
import Nav from "./Components/Nav";
import ArticlesList from "./Components/ArticlesList";
import SingleArticle from "./Components/SingleArticle";
import Users from "./Components/Users";
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
          <Route path="/articles/:article_id" element={<SingleArticle />}></Route>
          <Route path="/users" element={<Users />}></Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;
