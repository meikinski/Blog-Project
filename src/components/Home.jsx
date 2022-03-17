import React, {useState, useEffect} from "react";
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "../App.css";
import recipies from '../sources/pictures/recipies.webp';
import authors from '../sources/pictures/authors.webp';
import partners from '../sources/pictures/partners.jpeg';
import blog from '../sources/pictures/blog.png';
import { Routes, Route, NavLink, Link } from "react-router-dom";
import Author from "./Author";
import Blogpost from "./Blogpost";
import Partner from "./Partner";
import Recipe from "./Recipe";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Modal from 'react-bootstrap/Modal'

const Home = () => {
  const [show, setShow] = useState(false);
  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    const myTimeout = setTimeout(() => {handleShow()}, 5000)
    return () => clearTimeout(myTimeout)
  }, [])


  return (
    <>
      <div className="hero">
        <Carousel fade>
          <Carousel.Item>
            <img
              class="carouselImage"
              style={{
                "max-height": "35rem",
                "object-fit": "cover",
                overflow: "hidden",
              }}
              className="d-block w-100"
              src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              alt="First slide"
            />
            <Carousel.Caption>
              <h2>Blog Name</h2>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              class="carouselImage"
              style={{
                "max-height": "35rem",
                "object-fit": "cover",
                overflow: "hidden",
              }}
              className="d-block w-100"
              src="https://images.unsplash.com/photo-1595526417596-c0fdbf75287b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h2>Blog Name</h2>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              class="carouselImage"
              style={{
                "max-height": "35rem",
                "object-fit": "cover",
                overflow: "hidden",
              }}
              className="d-block w-100"
              src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h2>Blog Name</h2>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              class="carouselImage"
              style={{
                "max-height": "35rem",
                "object-fit": "cover",
                overflow: "hidden",
              }}
              className="d-block w-100"
              src="https://images.unsplash.com/photo-1626803775151-61d756612f97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              alt="Forth slide"
            />

            <Carousel.Caption>
              <h2>Blog Name</h2>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      
      <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Sign up for our awesome newsletter</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control type="email" placeholder="Enter email" />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>

              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="success" type="submit" onClick={handleClose}>
                Sign up
              </Button>
            </Modal.Footer>
          </Modal>
      <div className="overviewCards">
        <div className="card">
          <Card style={{ width: "20rem" }}>
            <Card.Img
            style={{ width: "19rem", height: "19rem", objectFit: "cover", overflow: "hidden"}}
              variant="top"
              src={recipies}
            />
            <Card.Body>
              <Card.Title>Recipies</Card.Title>
              <Card.Text>
                You can find here our awesome recipies.
              </Card.Text>
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
                <Button className="buttonCard" variant="primary">
                Go to recipies
                </Button>
              </NavLink>
             
            </Card.Body>
          </Card>
        </div>
        <div className="card">
          <Card style={{ width: "20rem" }}>
            <Card.Img
              style={{ width: "19rem", height: "19rem", objectFit: "cover", overflow: "hidden"}}
              variant="top"
              src={blog}
            />
            <Card.Body>
              <Card.Title>Blog</Card.Title>
              <Card.Text>
                Find here some useful tipps about the healthy eating.
              </Card.Text>
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
                <Button className="buttonCard" variant="primary">
                Go to blog
              </Button>
              </NavLink>
            </Card.Body>
          </Card>
        </div>
        <div className="card">
          <Card style={{ width: "20rem" }}>
            <Card.Img
              style={{ width: "19rem", height: "19rem", objectFit: "cover", overflow: "hidden"}}
              variant="top"
              src={authors}
            />
            <Card.Body>
              <Card.Title>Authors</Card.Title>
              <Card.Text>
                Meet here our authors that write for you.
              </Card.Text>
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
                <Button className="buttonCard" variant="primary">
                Go to authors
              </Button>
              </NavLink>
            </Card.Body>
          </Card>
        </div>
        <div className="card">
          <Card style={{ width: "20rem" }}>
            <Card.Img
            style={{ width: "19rem", height: "19rem", objectFit: "cover", overflow: "hidden"}}
              variant="top"
              src={partners}
              alt="partners"
            />
            <Card.Body>
              <Card.Title>Partners</Card.Title>
              <Card.Text>
              Meet our dedicated partners that are with us for years.
              </Card.Text>
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
                <Button className="buttonCard" variant="primary">
              Go to partners
              </Button>
              </NavLink> 
            </Card.Body>
          </Card>
        </div>
      </div>
      <Routes>
            <Route path="/" />
            <Route path="recipes/:author" element={<Author />}></Route>
            <Route path="/recipe" element={<Recipe />} />
            <Route path="/blog" element={<Blogpost />} />
            <Route path="/authors" element={<Author />} />
            <Route path="/partners" element={<Partner />} />
          </Routes>
    </>
  );
};

export default Home;
