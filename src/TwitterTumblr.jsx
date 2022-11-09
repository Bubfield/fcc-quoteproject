import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitterSquare,
  faTumblrSquare,
} from "@fortawesome/free-brands-svg-icons";

const TwitterTumblr = ({ quoteText, quoteAuthor }) => {
  return (
    <div className="twitter-tumblr-container">
      <a
        id="tweet-quote"
        href={`https://twitter.com/intent/tweet?text=%22${
          quoteText && quoteText.slice(0, 200) + "[Quote too long]..."
        }%22%20-%20${quoteAuthor}`}
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon icon={faTwitterSquare} size="3x" />
      </a>
      <a
        id="tumblr-quote"
        href={`https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption=${quoteAuthor}&content=${quoteText}&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button`}
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon icon={faTumblrSquare} size="3x" />
      </a>
    </div>
  );
};

export default TwitterTumblr;
