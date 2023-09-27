import { useCallback, useEffect, useMemo, useState } from "react";
import { faker } from "@faker-js/faker";
import Container from "../components/Common/Container";
import Header from "../components/Common/Header";
import QuotesList from "../components/Management/QuotesList";
import Archive from "../components/Common/Archive";
import Banner from "../components/Common/Banner";
import Body from "../components/Common/Body";

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

function createRandomPost() {
  return {
    quote: faker.hacker.phrase(),
    author: `${faker.hacker.adjective()} ${faker.hacker.noun()}`,
    category: `${faker.hacker.adjective()} ${faker.hacker.noun()}`,
  };
}

export default function HomePage() {
  const [query, setQuery] = useState("");
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(false);
  // const capitalizedString = capitalizeFirstLetter(query);

  const [posts] = useState(() =>
    Array.from({ length: 5000 }, () => createRandomPost())
  );

  // state for new quote
  const [quoteAuthor, setQuoteAuthor] = useState("");
  const [newQuote, setNewQuote] = useState("");

  // NOTE: useMemo is used to memoize a value
  const archiveOptions = useMemo(() => {
    return {
      show: false,
      title: `Post archive in addition to ${quotes.length} main posts`,
    };
  }, [quotes.length]);
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

  // NOTE: useCallback is used to memoize a function
  // Aside from that, it is best to use 'quotes'(line 112) so that whenever
  // the 'quotes'(line 69) state changes, ESLint won't complain to add it in the dependency array
  // if you try to use 'quote' instead of 'quotes', ESLint will complain to add it in the dependency array
  const handleAddPost = useCallback((quote) => {
    setQuotes((quotes) => [...quotes, quote]);
  }, []);

  const handleSubmitQuote = (e) => {
    e.preventDefault();
    setQuotes((curQuote) => [
      ...curQuote,
      { author: quoteAuthor, quote: newQuote },
    ]);
  };

  return (
    <div className="container-fluid position-relative p-0">
      <div className="container-fluid bg-primary mb-5 hero-header">
        <Container className="py-5">
          <Banner setQuery={setQuery}></Banner>
        </Container>
      </div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div className="container-xxl py-5">
          <Header />

          <Container>
            <Body
              setQuoteAuthor={setQuoteAuthor}
              setNewQuote={setNewQuote}
              handleSubmitQuote={handleSubmitQuote}
            ></Body>
          </Container>
          <Container>
            <QuotesList quotes={quotes} query={query} setQuotes={setQuotes} />
          </Container>
          <Archive
            length={quotes.length}
            loading={loading}
            posts={posts}
            archiveOptions={archiveOptions}
            handleAddPost={handleAddPost}
          ></Archive>
        </div>
      )}
    </div>
  );
}
