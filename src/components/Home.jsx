import React from 'react';
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import Button from 'react-bootstrap/Button';
import "../App.css";

const Home = () => {
  return (
    <>
      <div className="hero">
        <Carousel fade>
          <Carousel.Item>
            <img class="carouselImage"
            style={{"max-height" : "35rem", "object-fit" : "cover", "overflow" : "hidden" }}
              className="d-block w-100"
              src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Blog Name</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item >
            <img class="carouselImage"
            style={{"max-height" : "35rem", "object-fit" : "cover", "overflow" : "hidden" }}
              className="d-block w-100"
              src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Blog Name</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img class="carouselImage"
            style={{"max-height" : "35rem", "object-fit" : "cover", "overflow" : "hidden" }}
              className="d-block w-100"
              src="https://images.unsplash.com/photo-1626803775151-61d756612f97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Blog Name</h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="overviewCards">
        <div className="card">
        <Card style={{ width: '18rem' }}>
<Card.Img variant="top" src="https://media.istockphoto.com/videos/watermelon-on-green-screen-video-id592229546?s=640x640" />
<Card.Body>
 <Card.Title>Card Title</Card.Title>
 <Card.Text>
   Some quick example text to build on the card title and make up the bulk of
   the card's content.
 </Card.Text>
 <Button className="buttonCard" variant="primary">Go somewhere</Button>
</Card.Body>
</Card> 
        </div>
        <div className="card">
        <Card style={{ width: '18rem' }}>
<Card.Img variant="top" src="https://media.istockphoto.com/videos/watermelon-on-green-screen-video-id592229546?s=640x640" />
<Card.Body>
 <Card.Title>Card Title</Card.Title>
 <Card.Text>
   Some quick example text to build on the card title and make up the bulk of
   the card's content.
 </Card.Text>
 <Button className="buttonCard" variant="primary">Go somewhere</Button>
</Card.Body>
</Card> 
        </div>
        <div className="card">
        <Card style={{ width: '18rem' }}>
<Card.Img variant="top" src="https://media.istockphoto.com/videos/watermelon-on-green-screen-video-id592229546?s=640x640" />
<Card.Body>
 <Card.Title>Card Title</Card.Title>
 <Card.Text>
   Some quick example text to build on the card title and make up the bulk of
   the card's content.
 </Card.Text>
 <Button className="buttonCard" variant="primary">Go somewhere</Button>
</Card.Body>
</Card> 
        </div>
        <div className="card">
        <Card style={{ width: '18rem' }}>
<Card.Img variant="top" src="https://media.istockphoto.com/videos/watermelon-on-green-screen-video-id592229546?s=640x640" />
<Card.Body>
 <Card.Title>Card Title</Card.Title>
 <Card.Text>
   Some quick example text to build on the card title and make up the bulk of
   the card's content.
 </Card.Text>
 <Button className="buttonCard" variant="primary">Go somewhere</Button>
</Card.Body>
</Card> 
        </div>
      </div>
     
</>
  );
}

export default Home;