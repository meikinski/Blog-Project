import React from "react";

export default function AuthorCards({
  name,
  picture,
  shortIntro,
  socialMedia,
}) {
  return (
    <div className="authors">
      <div className="authorImg">
        <img src={picture} alt="Author" />
      </div>
      <div className="authorTitle">{name}</div>
      <div className="shortIntro">{shortIntro}</div>
      <div className="socialMedia">{socialMedia}</div>
    </div>
  );
}
