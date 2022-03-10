import React, { useState } from "react";

export default function AuthorCards({
  name,
  picture,
  shortIntro,
  socialMedia,
}) {
  const [showText, setShowText] = useState(false);
  return (
    <div className="authors">
      <div className="authorImg">
        <a href={socialMedia} className="socialMedia">
          <img src={picture} alt="Author" />
        </a>
      </div>
      <h3 className="authorTitle">{name}</h3>
      <div className="shortIntro">{shortIntro}</div>
    </div>
  );
}
