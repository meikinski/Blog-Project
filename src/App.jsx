import "./App.css";
import React, { useState, useEffect } from "react";
import { useContentful } from "react-contentful";
import { Routes, Route, NavLink } from "react-router-dom";
import { client } from "./client.js";
import Home from "./components/Home";
import Author from "./components/Author";
import Blogpost from "./components/Blogpost";
import Partner from "./components/Partner";
import Recipe from "./components/Recipe";
import Footer from "./components/Footer"
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Modal from 'react-bootstrap/Modal'


function App() {
  const [show, setShow] = useState(false);
  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="App">
        <header className="App-header sticky-top d-flex justify-content-between align-items-center flex-md-row flex-wrap">
         
            <nav className="navbar d-flex justify-content-start flex-grow-4 my-3 mx-3 ">
              <NavLink
                style={({ isActive }) => {
                  return {
                    color: isActive ? "rgba(6, 124, 75, 0.808)" : "",
                    fontWeight: isActive ? "bold" : "",
                  };
                }}
                className="navLink"
                to="/"
              >
                Home
              </NavLink>
              <NavLink
                style={({ isActive }) => {
                  return {
                    color: isActive ? "rgba(6, 124, 75, 0.808)" : "",
                    fontWeight: isActive ? "bold" : "",
                  };
                }}
                className="navLink"
                to="/recipes"
              >
                Recipes
              </NavLink>
              <NavLink
                style={({ isActive }) => {
                  return {
                    color: isActive ? "rgba(6, 124, 75, 0.808)" : "",
                    fontWeight: isActive ? "bold" : "",
                  };
                }}
                className="navLink"
                to="/blog"
              >
                Blog
              </NavLink>
              <NavLink
                style={({ isActive }) => {
                  return {
                    color: isActive ? "rgba(6, 124, 75, 0.808)" : "",
                    fontWeight: isActive ? "bold" : "",
                  };
                }}
                className="navLink"
                to="/authors"
              >
                Authors
              </NavLink>
              <NavLink
                style={({ isActive }) => {
                  return {
                    color: isActive ? "rgba(6, 124, 75, 0.808)" : "",
                    fontWeight: isActive ? "bold" : "",
                  };
                }}
                className="navLink"
                to="/partners"
              >
                Partners
              </NavLink>
            </nav>
            <Form className="d-flex flex-grow-2 flex-wrap">
                <div className="d-flex flex-row align-self-center">
                  <FormControl
                  type="search"
                  placeholder="Search"
                  className="align-self-center py-2 mx-2"
                  aria-label="Search"
                  />
                  <Button variant="success flex-grow-1 px-0 align-self-center my-1">
                    Search
                  </Button>
                </div>


                <Button
                variant="primary mx-2 my-2 align-self-center "
                onClick={handleShow}
                >
                Login
                </Button>

            </Form>

          
        
        </header>
        <main>

          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Login to your account</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>

              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" type="submit" onClick={handleClose}>
                Login
              </Button>
            </Modal.Footer>
          </Modal>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="recipes/:author" element={<Author />}></Route>
            <Route path="/recipes" element={<Recipe />} />
            <Route path="/blog" element={<Blogpost />} />
            <Route path="/authors" element={<Author />} />
            <Route path="/partners" element={<Partner />} />
          </Routes>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
}

export default App;
