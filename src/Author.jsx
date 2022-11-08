import React from "react";

const Author = ({ quoteAuthor }) => {
  return (
    <div className="author-container">
      <h3 id="author">- {quoteAuthor}</h3>
    </div>
  );
};

export default Author;
