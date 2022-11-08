import React from "react";

const NewQuoteButton = ({ handleClick }) => {
  return (
    <button id="new-quote" type="button" onClick={handleClick}>
      New quote
    </button>
  );
};

export default NewQuoteButton;
