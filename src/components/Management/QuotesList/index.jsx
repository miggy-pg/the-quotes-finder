import Card from "../../Common/Card";

export default function QuotesList({ quotes }) {
  return (
    <div className="row g-4">
      {quotes.map((quote) => (
        <Card key={quote.quote} quote={quote} />
      ))}
    </div>
  );
}
