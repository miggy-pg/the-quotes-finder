import SearchBar from "../../Common/SearchBar";

export default function Banner({ setQuery }) {
  return (
    <div className="row justify-content-center">
      <div className="col-lg-10 pt-lg-5 mt-lg-5 text-center">
        <h1 className="display-3 text-white mb-3 py-3 animated slideInDown">
          What motivation do you seek?
        </h1>
        <SearchBar setQuery={setQuery} />
      </div>
    </div>
  );
}
