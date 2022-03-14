import React, { useState, useEffect } from "react";
import { client } from "../client.js";
import AuthorCards from "./AuthorCards";

export default function Author() {
  const [author, setAuthor] = useState([]);
  // console.log(author);
  useEffect(() => {
    const getAuthors = async () => {
      try {
        const resp = await client.getEntries({ content_type: "authors" });
        console.log(resp);
        setAuthor(resp.items);
      } catch (err) {
        console.log(err);
      }
    };
    getAuthors();
  }, []);

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
    </>
  );
}
