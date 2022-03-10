import "./App.css";
import React, { useEffect } from "react";
import { useContentful } from "react-contentful";
import { Routes, Route } from "react-router-dom";
import { client } from "./client.js";
import Carousel from "react-bootstrap/Carousel";
import Author from "./components/Author";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Carousel fade>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Blog Name</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Blog Name</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images.unsplash.com/photo-1626803775151-61d756612f97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Blog Name</h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </header>
      <main></main>
      <footer></footer>
    </div>
  );
}

export default App;
