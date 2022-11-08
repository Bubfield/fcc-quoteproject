import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";

const QuoteText = ({ quoteText }) => {
  return (
    <div>
      <h1 id="text">
        <FontAwesomeIcon icon={faQuoteLeft} size="lg" className="quote-left" />{" "}
        {quoteText}
      </h1>
    </div>
  );
};

export default QuoteText;
