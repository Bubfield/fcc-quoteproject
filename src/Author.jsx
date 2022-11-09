import React from "react";
import { useState, useEffect } from "react";

const Author = ({ quoteAuthor }) => {
  const [author, setAuthor] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setAuthor(!author);
    }, 500);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="author-container">
      <h3 id="author">- {author && quoteAuthor}</h3>
    </div>
  );
};

export default Author;
