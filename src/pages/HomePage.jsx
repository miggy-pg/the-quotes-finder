import { useEffect, useState } from "react";
import Container from "../components/Common/Container";
import Header from "../components/Common/Header";
import QuotesList from "../components/Management/QuotesList";
import SearchBar from "../components/Common/SearchBar";
// import Button from "../components/Common/Button";

// function capitalizeFirstLetter(string) {
//   return string
//     .split(" ")
//     .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
//     .join(" ");
// }

const apiKey = "EbXNorgMnC8zB/xZxM3CNg==FOyxrD2aAhQMHMXc";
const headers = {
  "X-API-Key": apiKey,
};

export default function HomePage() {
  const [query, setQuery] = useState("");
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(false);
  // const capitalizedString = capitalizeFirstLetter(query);

  // state for new quote
  const [quoteAuthor, setQuoteAuthor] = useState("");
  const [newQuote, setNewQuote] = useState("");

  const [showArchive, setShowArchive] = useState(false);

  useEffect(() => {
    const makeAPICall = async () => {
      try {
        setLoading(true);
        const request = await fetch(
          `https://api.api-ninjas.com/v1/quotes?limit=10`,
          {
            mode: "cors",
            headers,
          }
        );
        await request.json().then((data) => setQuotes(data));
      } catch (e) {
        console.log(e);
      }
    };
    makeAPICall();
    setLoading(false);
  }, []);

  const handleSubmitQuote = (e) => {
    e.preventDefault();
    setQuotes((curQuote) => [
      ...curQuote,
      { author: quoteAuthor, quote: newQuote },
    ]);
  };
  console.log(quotes);
  return (
    <div className="container-fluid position-relative p-0">
      <div className="container-fluid bg-primary mb-5 hero-header">
        <Container className="py-5">
          <div className="row justify-content-center">
            <div className="col-lg-10 pt-lg-5 mt-lg-5 text-center">
              <h1 className="display-3 text-white mb-3 py-3 animated slideInDown">
                What motivation do you seek?
              </h1>
              <SearchBar setQuery={setQuery} />
            </div>
          </div>
        </Container>
      </div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div className="container-xxl py-5">
          <Header />

          <Container>
            <div
              className="col-lg-4 col-md-12 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <form onSubmit={handleSubmitQuote}>
                <div className="row g-3">
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      onChange={(e) => setQuoteAuthor(e.target.value)}
                    />
                  </div>

                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control"
                      id="quote"
                      onChange={(e) => setNewQuote(e.target.value)}
                    />
                  </div>

                  <div className="col-12">
                    <button
                      className="btn btn-primary w-100 py-3"
                      type="submit"
                    >
                      Add Quote
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </Container>
          <Container>
            <QuotesList quotes={quotes} query={query} setQuotes={setQuotes} />
          </Container>
          <Container>
            <div className="archive">
              <h1>POST ARCHIVE IN ADDITION TO {quotes.length} MAIN POSTS</h1>
              <button onClick={() => setShowArchive((s) => !s)}>
                {showArchive ? "Hide Archive" : "Show Archive"}
              </button>
              {!loading && showArchive && (
                <ul>
                  {quotes.map(
                    (quote) => (
                      <p key={quote.quote}>{quote.quote}</p>
                    )
                    // console.log(quote)
                  )}
                </ul>
              )}
            </div>
            <p> {console.log(showArchive)}</p>
          </Container>
        </div>
      )}
    </div>
  );
}
