import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "../App.css";
import recipies from '../sources/pictures/recipies.webp';
import authors from '../sources/pictures/authors.webp';
import partners from '../sources/pictures/partners.jpeg';
import blog from '../sources/pictures/blog.png';

const Home = () => {
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
              <Button className="buttonCard" variant="primary">
                Go to recipies
              </Button>
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
              <Button className="buttonCard" variant="primary">
                Go to blog
              </Button>
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
              <Button className="buttonCard" variant="primary">
                Go to authors
              </Button>
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
              <Button className="buttonCard" variant="primary">
                Go to partners
              </Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Home;
