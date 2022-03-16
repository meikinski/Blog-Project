import React, {useState, useEffect} from 'react';
import {useContentful} from 'react-contentful'
import { useNavigate } from 'react-router-dom'
import {client} from '../client.js';
import './recipe.css'
import ReactMarkdown from 'react-markdown';
import RecipeCard from './RecipeCard.jsx';



export default function Recipe() {

const [recipesData, setRecipesData] = useState([]);


useEffect(() => {

    client.getEntries({content_type:'recipe'})
    .then(response => setRecipesData(response.items)
    .catch(error => console.log('Error: ', error))
    );
     },[]);

console.log(recipesData);

let navigate =useNavigate();
function goBack() {
  navigate(-1);
}

return (
  <>
    <div className="header">
      <h2>RECIPES</h2>
    </div>
    <div className="d-flex flex-wrap justify-content-around">
      {recipesData.map((recipes) => (
        <RecipeCard
          title={recipes.fields.title}
          description={recipes.fields.description}
          rating={recipes.fields.rating}
          author={recipes.fields.author}
          image={recipes.fields.picture.fields.file.url}
          ingredients={recipes.fields.ingredients}
          preperation={recipes.fields.prep}
        />
      ))}
    </div>
     <div className="d-flex justify-content-center mb-5">
    <button onClick={goBack}>Go back</button>
    </div>
  </>
);
   

} 


