import React from "react";
import QuoteText from "./QuoteText";
import Author from "./Author";
import ButtonContainer from "./ButtonContainer";

const QuoteBox = ({ quoteText, quoteAuthor, handleClick }) => {
  return (
    <div id="quote-box">
      <QuoteText quoteText={quoteText} />
      <Author quoteAuthor={quoteAuthor} />
      <ButtonContainer
        quoteText={quoteText}
        quoteAuthor={quoteAuthor}
        handleClick={handleClick}
      />
    </div>
  );
};

export default QuoteBox;
