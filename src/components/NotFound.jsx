import React from "react";

export default function NotFound() {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <img
        className="notfoundImg"
        src="https://c.tenor.com/buMYkEzhCd8AAAAC/forgiveness-forgiveness-please.gif"
        alt="Not found"
      />
      <h5>
        Sorry, the page you are looking for does not exist or another error
        occured.
      </h5>
      <h5>
        Go back to <a href="/">Home</a>
      </h5>
    </div>
  );
}
