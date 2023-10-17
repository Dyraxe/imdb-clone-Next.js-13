export default async function getMovie(movieId) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}`,
  );
  if (!res.ok) {
    throw new Error("Error while fetching data");
  }
  return await res.json();
}
