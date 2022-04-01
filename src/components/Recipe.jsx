import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom'
import {client} from '../client.js';
import './recipe.css'
import RecipeCard from './RecipeCard.jsx';

export default function Recipe() {

const [recipesData, setRecipesData] = useState([]);
//console.log(response.items)

useEffect(() => {

  fetch('https://wbs-blog-project.herokuapp.com/recipes')
  .then(response => response.json())
    .then(data => setRecipesData(data)
    .catch(error => console.log('Error: ', error))
    );
     },[]);

     console.log('Data', recipesData);


let navigate =useNavigate();
function goBack() {
  navigate(-1);
}
/*
//1. check if some recipes include a property "tag" with the name "veggie"
const handleVeggie = () => {
//recipes state manipulieren und nur veggie Rezepte anzeigen
client.getEntries({content_type:'recipe'})
    .then(response => setRecipesData(response.items.filter(el => el.fields.tags?.includes("Veggie")))
    .catch(error => console.log('Error: ', error))
    );
/*let veggieRecipes = recipesData && recipesData.filter(el => el.fields.tags?.includes("Veggie"));
console.log(veggieRecipes)
setRecipesData(veggieRecipes);
}

/*const handleMeat = () => {
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
    }*/

return (
  <>
    <div className="header">
      <h2>RECIPES</h2>
    </div>
    <div className="tagButtons">
 <button className="tagButton" >veggie</button>  <button className="tagButton">meat</button> <button className="tagButton">pasta</button>
    </div>
    <div className="d-flex flex-wrap justify-content-around">
      {recipesData && recipesData.map((recipes) => (
        <RecipeCard
          key = {recipes.id}
          title={recipes.Title}
          description={recipes.Description}
          tags={recipes.Description}
          rating={recipes.Rating}
          author={recipes.Author}
          image={recipes.Picture}
          ingredients={recipes.Ingrediients}
          preperation={recipes.Prep}
          recipeTags={recipes.Tags}
        />
      ))}
    </div>
    <div className="tagButtons">
    <button >all recipes</button>
    </div>
    <div className="d-flex justify-content-center mb-5">
    <button onClick={goBack}>Go back</button>
    </div>
  </>
);


} 


