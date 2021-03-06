import React from "react";

export default function AuthorCards({
  name,
  picture,
  shortIntro,
  socialMedia,
  title,
}) {
  
 
  return (
    <div className="authors">
      <div className="authorImgContainer">
        <a href={socialMedia} className="socialMedia">
          <img className="authorImg" src={picture} alt="Author" />
        </a>
        <div className="overlay">
          <a href={socialMedia} target="_blank" rel="noreferrer" className="socialMedia">
            <div class="text">Follow on Instagram</div>
          </a>
        </div>
      </div>
      <h3 className="authorTitle">{title}</h3>
      <div className="authorBtn-container">
        <div className="authorBtn">About {name}</div>
      </div>
      <div className="shortIntro">{shortIntro}</div>
    </div>
  );
}
