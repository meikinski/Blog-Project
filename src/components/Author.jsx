import React, { useState, useEffect } from "react";
import {useNavigate} from 'react-router-dom';
import AuthorCards from "./AuthorCards";

export default function Author() {
  const [author, setAuthor] = useState([]);

  useEffect(() => {
        fetch('https://wbs-blog-project.herokuapp.com/authors')
        .then(response => response.json())
        .then(data => setAuthor(data))
        .catch(error => console.log('Error: ', error))}, []);


  let navigate = useNavigate();
  function goBack() {
    navigate(-1)}

  return (
    <>
      <div className="authorWrapper">
        {author.map((person) => (
          <AuthorCards
            key={person.id}
            id={person.id}
            title={person.Cooking_type}
            name={person.Name}
            picture={person.Image}
            shortIntro={person.Intro}
            socialMedia={person.Instagram_link}
          />
        ))}
      </div>
      <div className="d-flex justify-content-center mb-5">
        <button onClick={goBack}>Go back</button>
      </div>
    </>
  );
}
