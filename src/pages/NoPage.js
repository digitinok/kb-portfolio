import React from "react";
import { Link } from "react-router-dom";

function NoPage() {
  return (
    <div>
      <h1 className="m-5">404 - Page not found</h1>
      <p>Sorry the page you are looking for could not be found.
         Please return to the home page.
      </p>
      <button className="rounded-3 text-bg-dark px-2">
        <Link to={'/kb-portfolio'}>Back to Homepage</Link>
      </button>
    </div>
      );
}

export default NoPage;
