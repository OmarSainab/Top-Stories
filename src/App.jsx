
import { useState } from 'react'
import  Nav  from './Components/Nav'
import  Header  from './Components/Header'
import  ArticlesList  from './Components/ArticlesList'
import  SingleArticle  from './Components/SingleArticle'
import  Users  from './Components/Users'
import { Routes, Route } from "react-router-dom";
import './App.css'

function App() {

  return (
    <div className='App'>
      <Nav />
      <Routes>
        <Route path='/' element={<Header />}></Route>
        <Route path='/articles' element={<ArticlesList />}></Route>
        <Route path='/articles/:article_id' element={<SingleArticle />}></Route>
        <Route path='/users' element={<Users />}></Route>
      </Routes>
    </div>
  )
}

export default App
