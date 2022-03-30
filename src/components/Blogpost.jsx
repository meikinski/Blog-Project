import React, { useState, useEffect } from "react";
import {client} from "../client";
import ReactMarkdown from 'react-markdown';
import ShowMoreText from "react-show-more-text";
import "../Blogpost.css";
import { useNavigate } from 'react-router-dom';

function Blogpost() {

    const [posts, setPosts] = useState([]);
    const [mounted, setMounted] = useState(false);


    function executeOnClick(isExpanded) {
        console.log(isExpanded);
    }


    useEffect(() => {
      fetch('http://localhost:8000/blog')
      .then(response => response.json())
      .then(data => setPosts(data))
      .catch(error => console.log('Error: ', error))}, []);


    posts && console.log(posts);

    let navigate = useNavigate();
    function goBack() {
    navigate(-1);
    }

    return (
      <>
        <div className="headerBlog">
          <h2>Our latest Blog Posts</h2>
        </div>

        {posts && posts.map((items) => {
          return (
            <div key={crypto.randomUUID()} className="blogPost">
              <div className="blogPictureContainer">
                <img
                  className="blogPicture"
                  src={items.Picture}
                  alt="blogspicture"
                />
              </div>
              <h2 className="blogTitle">
                <ReactMarkdown>
                  {items.title}
                </ReactMarkdown>
              </h2>
              <div className="blockquote">
                <p>{items.guote}</p>
              </div>
              <ShowMoreText
                /* Default options */
                lines={6}
                more="Show more"
                less="Show less"
                className="content-css"
                anchorClass="my-anchor-css-class"
                onClick={executeOnClick}
                expanded={false}
                width={990}
                truncatedEndingComponent={"... "}
              >
                <div className="blogEntry">
                  <ReactMarkdown>{items.blogtext}</ReactMarkdown>
                </div>
              </ShowMoreText>
              <div className="authorsPictureContainer">
                <img
                  className="authorsPicture"
                  src={items.authorspicture}
                  alt="authorspicture"
                />
              </div>
              <div className="authorsName">
                <ReactMarkdown>
                  {items.authorsname}
                </ReactMarkdown>
              </div>
            </div>
          );
        })}
        <div className="d-flex justify-content-center mb-5">
          <button onClick={goBack}>Go back</button>
        </div>
      </>
    );
}

export default Blogpost;