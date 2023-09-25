import { useEffect } from "react";
import Card from "../../Common/Card";

export default function QuotesList({ quotes, query, setQuotes }) {
  console.log("quotes: ", quotes);
  // if (query) {
  //   return (
  //     <div className="row g-4">
  //       {quotes.filter(
  //         (quote) => quote.category && <Card key={quote.quote} quote={quote} />
  //       )}
  //     </div>
  //   );
  // }

  // useEffect(() => {
  //   // quotes.map((quote) => console.log(quote.category === query && quote));
  //   setQuotes((quotes) =>
  //     quotes.map((quote) => quote.category === query && quote)
  //   );
  // }, [query]);

  return (
    <div className="row g-4">
      {quotes.map((quote) => (
        <Card key={quote.quote} quote={quote} />
      ))}
    </div>
  );
}
