import Card from "../../Common/Card";

export default function QuotesList({ quotes, query }) {
  const filteredQuotes =
    query.length > 0
      ? quotes.filter((quote) => quote.category.includes(query))
      : quotes;

  console.log("filteredQuotes: ", filteredQuotes);
  return (
    <div className="row g-4">
      {filteredQuotes.map((quote) => (
        <Card key={quote.quote} quote={quote} />
      ))}
    </div>
  );
}
