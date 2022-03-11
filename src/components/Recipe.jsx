import React, {useState, useEffect} from 'react';
import {useContentful} from 'react-contentful'
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

return(
<>
    
   <div>
   
       {recipesData.map((recipes) => (
           <RecipeCard
           title={recipes.fields.title}
           description={recipes.fields.description}
            rating={recipes.fields.rating}
            image={recipes.fields.picture.fields.file.url}
            ingredients={recipes.fields.ingredients}
            preperation=
            {recipes.fields.prep}
           />
           ))}
           </div>
         </>
       );
   

} 


