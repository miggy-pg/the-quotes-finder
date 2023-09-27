export default function Body({
  handleSubmitQuote,
  setQuoteAuthor,
  setNewQuote,
}) {
  return (
    <div className="col-lg-4 col-md-12 wow fadeInUp" data-wow-delay="0.5s">
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
            <button className="btn btn-primary w-100 py-3" type="submit">
              Add Quote
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
