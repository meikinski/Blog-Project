import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

export default function NotFound() {
  let navigate = useNavigate();
  function goBack() {
    navigate(-1);
  }
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
      <button onClick={goBack}>Go back</button>
    </div>
  );
}
