import React, { useState } from "react";

export default function AuthorCards({
  name,
  picture,
  shortIntro,
  socialMedia,
  title,
}) {
  const [showText, setShowText] = useState(false);

  const handleClick = () => {
    if (showText === false) {
      setShowText(true);
    } else {
      setShowText(false);
    }
  };
  return (
    <div className="authors">
      <div className="authorImgContainer">
        <img className="authorImg" src={picture} alt="Author" />
      </div>
      <h3 className="authorTitle">{title}</h3>
      <div className="authorBtn-container">
        <button className="authorBtn" onClick={handleClick}>
          About {name}
        </button>
      </div>
      {showText && <div className="shortIntro">{shortIntro}</div>}
      <br />
      {showText && (
        <a href={socialMedia} className="socialMedia">
          Follow me on Instagram
        </a>
      )}
    </div>
  );
}
