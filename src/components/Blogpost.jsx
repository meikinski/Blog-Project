import React, { useState, useEffect } from "react";
import {client} from "../client";
import ReactMarkdown from 'react-markdown';
import ShowMoreText from "react-show-more-text";
import "../Blogpost.css";
import { useNavigate } from 'react-router-dom';

function Blogpost() {

    const [posts, setPosts] = useState([]);
    //const [showMore, setShowMore] = useState(false);
    console.log(posts);

    function executeOnClick(isExpanded) {
        console.log(isExpanded);
    }

    useEffect(() => {

        client.getEntries({ content_type: 'blogPosts' })
            .then(response => setPosts(response.items)

            );
    }, []);

    let navigate = useNavigate();

    function goBack() {
    navigate(-1);
    }

    return (
      <>
        <div className="headerBlog">
          <h2>Our latest Blog Posts</h2>
        </div>

        {posts.map((items) => {
          return (
            <div key={crypto.randomUUID()} className="blogPost">
              <div className="blogPictureContainer">
                <img
                  className="blogPicture"
                  src={items.fields.picture.fields.file.url}
                  alt="blogspicture"
                />
              </div>
              <h2 className="blogTitle">
                <ReactMarkdown>
                  {items.fields.blogTitle.content[0].content[0].value}
                </ReactMarkdown>
              </h2>
              <div className="pullQuote">
                <ReactMarkdown>
                  {items.fields.pullQuote.content[0].content[0].value}
                </ReactMarkdown>
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
                  <ReactMarkdown>{items.fields.blogEntry}</ReactMarkdown>
                </div>
              </ShowMoreText>
              <div className="authorsPictureContainer">
                <img
                  className="authorsPicture"
                  src={items.fields.authorsPicture.fields.file.url}
                  alt="authorspicture"
                />
              </div>
              <div className="authorsName">
                <ReactMarkdown>
                  {items.fields.authorsName.content[0].content[0].value}
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