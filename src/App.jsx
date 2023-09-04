import { useState } from 'react'
import { Articles } from './Components/Articles'
import { SingleArticle } from './Components/SingleArticle'
import { Header } from './Components/Header'
import { Users } from './Components/Users'
import { Nav } from './Components/Nav'
import { Routes, Route } from "react-router-dom";
import './App.css'

function App() {


  return (
    <div className='App'>
      <Nav/>
      <Routes>
        <Route path='/' element={<Header />}></Route>
        <Route path='/articles' element={<Articles />}></Route>
        <Route path='/articles/:article_id' element={<SingleArticle />}></Route>
        <Route path='/articles' element={<Articles />}></Route>
      </Routes>
    </div>
  )
}

export default App
