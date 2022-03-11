import React, { useState } from "react";

export default function AuthorCards({
  name,
  picture,
  shortIntro,
  socialMedia,
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
        <a href={socialMedia} className="socialMedia">
          <img className="authorImg" src={picture} alt="Author" />
        </a>
      </div>
      <h3 className="authorTitle" onClick={handleClick}>
        {name}
      </h3>
      {showText && <div className="shortIntro">{shortIntro}</div>}
    </div>
  );
}
