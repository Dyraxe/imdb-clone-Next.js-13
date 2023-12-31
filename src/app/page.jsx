import SearchBox from "./SearchBox";
import NavBar from "./components/NavBar";
import Results from "./components/Results";

const API_KEY = process.env.API_KEY;
export default async function Home({ searchParams }) {
  const genre = searchParams.genre || "fetchTrending";
  const res = await fetch(
    `https://api.themoviedb.org/3/${
      genre === "fetchTopTrending" ? "movie/top_rated" : "trending/all/week"
    }?api_key=${API_KEY}&language=en-US&include_adult=false&page=1`,
    { next: { revalidate: 10800 } },
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();
  return (
    <>
      <NavBar />
      <SearchBox />

      <Results results={data.results} />
    </>
  );
}
