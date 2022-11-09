import { useEffect, useState } from "react";
import axios from "axios";
import Loading from "./Loading";
import Footer from "./Footer";
import changeColors from "./changeColors";
import changeTextAndLinks from "./changeTextAndLinks";
import QuoteBox from "./QuoteBox";

const API_KEY = process.env.REACT_APP_API_KEY;

function App() {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://famous-quotes4.p.rapidapi.com/random",
      params: { category: "history", count: "50" },
      headers: {
        "X-RapidAPI-Key": `${API_KEY}`,
        "X-RapidAPI-Host": "famous-quotes4.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        setQuotes(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  const handleClick = () => {
    changeColors();
    changeTextAndLinks(quotes);
  };

  if (!quotes[0]) {
    return <Loading />;
  }

  return (
    <div className="main-container">
      <QuoteBox
        quoteText={quotes[0].text}
        quoteAuthor={quotes[0].author}
        handleClick={handleClick}
      />
      <Footer />
    </div>
  );
}

export default App;
