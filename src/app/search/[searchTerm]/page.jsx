import SearchBox from "@/app/SearchBox";
import Results from "@/app/components/Results";

async function SearchPage({ params: { searchTerm } }) {
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${searchTerm}&language=en-US&include_adult=false`,
  );
  if (!res.ok) {
    throw new Error("Error while fetching data");
  }
  const data = await res.json();
  const results = data.results;
  return (
    <>
      <SearchBox defaultSearch={searchTerm} />
      <div>
        {results && results.length === 0 && (
          <h1 className="pt-6 text-center text-2xl">No results found</h1>
        )}
        {results && results.length > 0 && <Results results={results} />}
      </div>
    </>
  );
}

export default SearchPage;
