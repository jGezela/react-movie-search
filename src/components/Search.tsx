// Search input component
export default function Search({
  searchTerm,
  setSearchTerm,
}: {
  searchTerm: string;
  setSearchTerm: (newSearchTerm: string) => void;
}) {
  return (
    <div className="search">
      <div>
        <img src="search-icon.svg" alt="Search" />
        <input
          type="text"
          placeholder="Search through thousands of movies"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
    </div>
  );
}
