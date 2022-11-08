const changeTextAndLinks = (quotes) => {
  let author = document.getElementById("author");
  let text = document.getElementById("text");
  let tweetButton = document.getElementById("tweet-quote");
  let tumblrButton = document.getElementById("tumblr-quote");

  let quotesRandomNum = Math.floor(Math.random() * quotes.length);

  let quoteLeft = text.innerHTML.slice(0, 612);

  text.style.animation = "fadeIn 1s";
  author.style.animation = "fadeIn 1s";

  setTimeout(() => {
    text.innerHTML = quoteLeft + quotes[quotesRandomNum].q;
    author.innerText = "- " + quotes[quotesRandomNum].a;
    tweetButton.href = `https://twitter.com/intent/tweet?hashtags=quotes&text=%22${quotes[quotesRandomNum].q}%22%20-%20${quotes[quotesRandomNum].a}`;
    tumblrButton.href = `https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption=${quotes[quotesRandomNum].a}&content=${quotes[quotesRandomNum].q}&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button`;
  }, 500);

  setTimeout(() => {
    text.style.animation = "";
    author.style.animation = "";
  }, 1100);
};

export default changeTextAndLinks;
