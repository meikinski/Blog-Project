import './App.css';
import React, {useEffect} from 'react';
import {useContentful} from 'react-contentful'
import {Routes, Route, NavLink} from 'react-router-dom';
import {client} from './client.js';
import Home from './components/Home';
import Author from './components/Author';
import Blogpost from './components/Blogpost';
import Partner from './components/Partner';
import Recipe from './components/Recipe';





function App() {


  return (
    <>
    <div className="App">
      <header className="App-header">
        <img className="logo"/>
        <nav className="navigation">

            <NavLink className="navLink" to="/">Home</NavLink>
            <NavLink className="navLink" to="/recipes">Recipes</NavLink>
            <NavLink className="navLink" to="/blog">Blog</NavLink>
            <NavLink className="navLink" to="/authors">Authors</NavLink>
            <NavLink className="navLink" to="/partners">Partners</NavLink>

        </nav>
        
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/recipes" element={<Recipe/>} />
          <Route path="/blog" element={<Blogpost/>} />
          <Route path="/authors" element={<Author/>} />
          <Route path="/partners" element={<Partner/>} />


        </Routes>
      </main>
      <footer>
        
      </footer>
    </div>
    </>
  );
}

export default App;
