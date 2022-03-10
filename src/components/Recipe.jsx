import React, {useState, useEffect} from 'react';
import {useContentful} from 'react-contentful'
import {client} from '../client.js';
import './recipe.css'
import ReactMarkdown from 'react-markdown';


export default function Recipe() {

const [recipesData, setRecipesData] = useState([]);
const [showPrep, setShowPrep] = useState(false);
const handleShowPrep = () => !showPrep ? setShowPrep(true) : setShowPrep(false);
const [showIngredients, setShowIngredients] = useState(false);
const handleShowIngredients = () => !showIngredients ? setShowIngredients(true): setShowIngredients(false);

useEffect(() => {

    client.getEntries({content_type:'recipe'})
    .then(response => setRecipesData(response.items)
    .catch(error => console.log('Error: ', error))
    );
     },[]);


return(
<>
    
   <div className='RecipesOverview'>
   
       {recipesData.map((recipes) => (
    <div className='Recipe'>
        
        <div className='title'> {recipes.fields.title} </div>
        <ReactMarkdown className='description'>
        {recipes.fields.description}
        </ReactMarkdown>
        
        <ReactMarkdown className='rating'>
        {recipes.fields.rating}
        </ReactMarkdown>
       <div className='image'> <img src={recipes.fields.picture.fields.file.url} alt="Food"/> </div>
       <div>
            <button className='btnShow' onClick={handleShowIngredients}>{!showIngredients ? "Show Ingredients" : "Hide List"}</button>
            {showIngredients ? 
            <ReactMarkdown className='ingredients'>
            {recipes.fields.ingredients}
            </ReactMarkdown> : null }
        </div>
       <div> 
            <button className='btnShow' onClick={handleShowPrep}>{!showPrep ? "Show Preperation" : "Close Liste"}</button>
            {showPrep ? 
            <ReactMarkdown className='prep'>
            {recipes.fields.prep}
            </ReactMarkdown> : null }
        </div>
        
    </div>   
       ))}
    </div>
</>

)
} 


