import React, { useState } from "react";
import { Link } from 'react-router-dom'
import ReactMarkdown from 'react-markdown';
import './recipe.css'
import Comment from './Comment'
import MediaButton from "./MediaButton";


export default function RecipeCard({
  title,
  description,
  rating,
  tags,
  author,
  image,
  ingredients,
  preperation,
}) {
  const [showPrep, setShowPrep] = useState(false);
  const handleShowPrep = () =>
    !showPrep ? setShowPrep(true) : setShowPrep(false);
  const [showIngredients, setShowIngredients] = useState(false);
  const handleShowIngredients = () =>
    !showIngredients ? setShowIngredients(true) : setShowIngredients(false);

  return (
    <>
    <div className="RecipesOverview">
      <div className="Recipe">
        <h3>{title}</h3>
        <ReactMarkdown className="description">{description}</ReactMarkdown>
        
        <Link to="/authors">
        <div >{author}</div>
        </Link>
        <div className="recipeImg"><img src={image} alt=""/></div>
        <MediaButton />
      
        <div>
          {showIngredients ? (
            <ReactMarkdown className="ingredients">{ingredients}</ReactMarkdown>
          ) : null}
          <button className="btnShow" onClick={handleShowIngredients}>
            {!showIngredients ? "Show Ingredients" : "Hide"}
          </button>
        </div>
        <div>
          {showPrep ? (
            <ReactMarkdown className="prep">{preperation}</ReactMarkdown>
          ) : null}
          <button className="btnShow" onClick={handleShowPrep}>
            {!showPrep ? "Show Preperation" : "Hide"}
          </button>
         
        </div>
        <Comment />
      </div>
    </div>
    </>
  );
}
