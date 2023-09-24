export default function Card({ quote }) {
  return (
    <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
      <div className="service-item rounded pt-3">
        <div className="p-4">
          <i className="fa fa-3x fa-globe text-primary mb-4"></i>
          <p>{quote.quote}</p>
          <h5>{quote.author}</h5>
        </div>
      </div>
    </div>
  );
}
