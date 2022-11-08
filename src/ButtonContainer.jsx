import React from "react";
import TwitterTumblr from "./TwitterTumblr";
import NewQuoteButton from "./NewQuoteButton";

const ButtonContainer = ({ quoteText, quoteAuthor, handleClick }) => {
  return (
    <div className="button-container">
      <TwitterTumblr quoteText={quoteText} quoteAuthor={quoteAuthor} />
      <NewQuoteButton handleClick={handleClick} />
    </div>
  );
};

export default ButtonContainer;
