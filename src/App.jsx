import './App.css';
import React, {useEffect} from 'react';
import {useContentful} from 'react-contentful'
import {Routes, Route} from 'react-router-dom';
import {client} from './client.js';
import Blogpost from "./components/Blogpost";
import Card from "react-bootstrap/Card";
import Button from 'react-bootstrap/Button';


function App() {


useEffect(() => {

  client.getEntries().then(response => console.log(response)
       
    );
  }, [])

  return (
    <div className="App">
      <header className="App-header">

      </header>
      <main>
        <>
        <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
</>
      <Blogpost />
      </main>
      <footer>

      </footer>
    </div>
  );
}

export default App;
