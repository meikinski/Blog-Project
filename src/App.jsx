import './App.css';
import React, {useEffect} from 'react';
import {useContentful} from 'react-contentful'
import {Routes, Route} from 'react-router-dom';
import {client} from './client.js';
import Author from "./components/Author";

function App() {


// useEffect(() => {

//   client.getEntries({content_type:'recipe'}).then(response => console.log(response)
       
//     );
//   }, [])




  return (
    <div className="App">
      <header className="App-header">

      </header>
      <main>
      <Author />
      </main>
      <footer>

      </footer>
    </div>
  );
}

export default App;
