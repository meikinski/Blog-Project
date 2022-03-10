import React, { useState, useEffect } from "react";
import {client} from "../client";
import ReactMarkdown from 'react-markdown';
import "../Blogpost.css";

function Blogpost() {

    const [posts, setPosts] = useState([]);
    console.log(posts);

    useEffect(() => {

        client.getEntries({ content_type: 'blogPosts' })
            .then(response => setPosts(response.items)

            );
    }, []);

    return (
        <>
            <h1>Our latest Blog Posts</h1>
            {posts.map((items) => {
                return (
                    <div key={crypto.randomUUID()} className="blogPost">
                        <div className="blogPictureContainer">
                            <img className="blogPicture" src={items.fields.picture.fields.file.url} alt="blogspicture" />
                        </div>
                        <h2 className="blogTitle">
                            <ReactMarkdown>{items.fields.blogTitle.content[0].content[0].value}</ReactMarkdown>
                        </h2>
                        <div className="pullQuote">
                            <ReactMarkdown>{items.fields.pullQuote.content[0].content[0].value}</ReactMarkdown>
                        </div>
                        <div className="blogEntry">
                            <ReactMarkdown>{items.fields.blogEntry}</ReactMarkdown>
                        </div>
                        <div className="authorsPictureContainer"><img className="authorsPicture" src={items.fields.authorsPicture.fields.file.url} alt="authorspicture" />
                        </div>
                        <div className="authorsName">
                            <ReactMarkdown>{items.fields.authorsName.content[0].content[0].value}</ReactMarkdown>
                        </div>

                    </div>
                );
            })}
        </>

    );
}

export default Blogpost;