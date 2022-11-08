import { useEffect, useState } from "react";
import axios from "axios";
import Loading from "./Loading";
import Footer from "./Footer";
import changeColors from "./changeColors";
import changeTextAndLinks from "./changeTextAndLinks";
import QuoteBox from "./QuoteBox";

function App() {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001").then((response) => {
      const quotesData = response.data;
      setQuotes(quotesData);
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
        quoteText={quotes[0].q}
        quoteAuthor={quotes[0].a}
        handleClick={handleClick}
      />
      <Footer />
    </div>
  );
}

export default App;
