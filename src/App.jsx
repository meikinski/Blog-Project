import "./App.css";
import React, { useState } from "react";
import { useContentful } from "react-contentful";
import { Routes, Route, NavLink } from "react-router-dom";
import { client } from "./client.js";
import Home from "./components/Home";
import Author from "./components/Author";
import Blogpost from "./components/Blogpost";
import Partner from "./components/Partner";
import Recipe from "./components/Recipe";
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
        <header className="App-header d-flex justify-content-between">
          <div>
            <nav className="navigation d-flex flex-grow-4 ">
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
            <Form className="d-flex flex-grow-2 mb-3 mt-1">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2 py-0"
                aria-label="Search"
              />
              <Button variant="success flex-grow-1 align-self-center mt-0">
                Search
              </Button>
            </Form>
          </div>
          <div className="d-flex">
            <Button
              variant="primary mt-0 align-self-end mb-3"
              onClick={handleShow}
            >
              Login
            </Button>
          </div>
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
        <footer></footer>
      </div>
    </>
  );
}

export default App;
