import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";

const QuoteText = ({ quoteText }) => {
  const [text, setText] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setText(!text);
    }, 500);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      <h1 id="text">
        <FontAwesomeIcon icon={faQuoteLeft} size="lg" className="quote-left" />{" "}
        {text && quoteText}
      </h1>
    </div>
  );
};

export default QuoteText;
