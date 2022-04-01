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
            key={person.sys.id}
            id={person.sys.id}
            title={person.fields.title}
            name={person.fields.name}
            picture={person.fields.picture.fields.file.url}
            shortIntro={person.fields.shortIntro1}
            socialMedia={person.fields.socialMedia}
          />
        ))}
      </div>
      <div className="d-flex justify-content-center mb-5">
        <button onClick={goBack}>Go back</button>
      </div>
    </>
  );
}
