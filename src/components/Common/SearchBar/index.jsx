import Button from "../Button";

export default function SearchBar({ setQuery }) {
  return (
    <div className="position-relative w-75 mx-auto animated slideInDown">
      <input
        className="form-control border-0 rounded-pill w-100 py-3 ps-4 pe-5"
        type="text"
        placeholder="Eg: Life"
        onChange={(e) => setQuery(e.target.value)}
      />
      <Button />
    </div>
  );
}
