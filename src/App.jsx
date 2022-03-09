import './App.css';
import React, {useEffect} from 'react';
import {useContentful} from 'react-contentful'
import {Routes, Route, NavLink} from 'react-router-dom';
import {client} from './client.js';
import Hero from './Hero';
import Author from './components/Author';
import Blogpost from './components/Blogpost';
import Partner from './components/Partner';
import Recipe from './components/Recipe';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';



function App() {


  return (
    <>
    <div className="App">
      <header className="App-header">
        <img className="logo"/>
        <nav>

            <NavLink to="/">Home</NavLink>
            <NavLink to="/recipes">Recipes</NavLink>
            <NavLink to="/blog">Blog</NavLink>
            <NavLink to="/authors">Authors</NavLink>
            <NavLink to="/partners">Partners</NavLink>

        </nav>
        <Hero/>
      </header>
      <main>

      </main>
      <footer>
        
      </footer>
    </div>
    </>
  );
}

export default App;
