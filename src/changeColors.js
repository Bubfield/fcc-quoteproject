import colorsArray from "./ColorsArray";

const changeColors = () => {
  let newQuote = document.getElementById("new-quote");
  let author = document.getElementById("author");
  let text = document.getElementById("text");
  let tweetButton = document.getElementById("tweet-quote");
  let tumblrButton = document.getElementById("tumblr-quote");

  let randomNum = Math.floor(Math.random() * colorsArray.length);
  let randomColor = colorsArray[randomNum];

  document.body.style.backgroundColor = randomColor;
  newQuote.style.backgroundColor = randomColor;
  text.style.color = randomColor;
  author.style.color = randomColor;
  tumblrButton.style.color = randomColor;
  tweetButton.style.color = randomColor;
};

export default changeColors;
