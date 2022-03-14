import React, { useState } from "react";
import { Link } from 'react-router-dom'
import ReactMarkdown from 'react-markdown';
import './recipe.css'


export default function RecipeCard({
  title,
  description,
  rating,
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
    <div className="RecipesOverview">
      <div className="Recipe">
        <h3>{title}</h3>
        <ReactMarkdown className="description">{description}</ReactMarkdown>
        <ReactMarkdown className="rating">{rating}</ReactMarkdown>
       <Link to="/authors">
        <div>{author}</div>
        </Link>
        <div><img src={image} alt=""/></div>
        <div>
          <img src={image} alt="" />
        </div>
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
      </div>
    </div>
  );
}
