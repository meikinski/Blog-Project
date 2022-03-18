import React, {useState, useEffect} from 'react';
import {useContentful} from 'react-contentful'
import { useNavigate } from 'react-router-dom'
import {client} from '../client.js';
import './recipe.css'
import ReactMarkdown from 'react-markdown';
import RecipeCard from './RecipeCard.jsx';

export default function Recipe() {

const [recipesData, setRecipesData] = useState([]);
//console.log(response.items)

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

//1. check if some recipes include a property "tag" with the name "veggie"
const handleVeggie = () => {
//recipes state manipulieren und nur veggie Rezepte anzeigen
client.getEntries({content_type:'recipe'})
    .then(response => setRecipesData(response.items.filter(el => el.fields.tags?.includes("Veggie")))
    .catch(error => console.log('Error: ', error))
    );
/*let veggieRecipes = recipesData && recipesData.filter(el => el.fields.tags?.includes("Veggie"));
console.log(veggieRecipes)
setRecipesData(veggieRecipes);*/
}

const handleMeat = () => {
  client.getEntries({content_type:'recipe'})
      .then(response => setRecipesData(response.items.filter(el => el.fields.tags?.includes("Meat")))
      .catch(error => console.log('Error: ', error))
      );
  }

  const handlePasta = () => {
    client.getEntries({content_type:'recipe'})
        .then(response => setRecipesData(response.items.filter(el => el.fields.tags?.includes("Pasta")))
        .catch(error => console.log('Error: ', error))
        );
    }

    const handleBackToAll = () => {
      client.getEntries({content_type:'recipe'})
    .then(response => setRecipesData(response.items)
    .catch(error => console.log('Error: ', error))
    );
    }

return (
  <>
    <div className="header">
      <h2>RECIPES</h2>
    </div>
    <div className="tagButtons">
 <button className="tagButton" onClick={handleVeggie}>veggie</button>  <button className="tagButton" onClick={handleMeat}>meat</button> <button className="tagButton" onClick={handlePasta}>pasta</button>
    </div>
    <div className="d-flex flex-wrap justify-content-around">
      {recipesData && recipesData.map((recipes) => (
        <RecipeCard
          title={recipes.fields.title}
          description={recipes.fields.description}
          rating={recipes.fields.rating}
          author={recipes.fields.author}
          image={recipes.fields.picture.fields.file.url}
          ingredients={recipes.fields.ingredients}
          preperation={recipes.fields.prep}
          recipeTags={recipes.fields.tags}
        />
      ))}
    </div>
    <div className="tagButtons">
    <button onClick={handleBackToAll}>all recipes</button>
    </div>
    <div className="d-flex justify-content-center mb-5">
    <button onClick={goBack}>Go back</button>
    </div>
  </>
);

   

} 


