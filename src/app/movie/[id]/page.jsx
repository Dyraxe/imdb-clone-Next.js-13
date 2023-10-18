import getMovie from "@/app/utils/getMovie";
import Image from "next/image";

async function MovieDetail({ params: { id: movieId } }) {
  const movie = await getMovie(movieId);
  console.log(movie);
  return (
    <div className="mx-auto w-full max-w-6xl">
      <div className="flex  flex-col content-center items-center p-4 lg:flex-row lg:space-x-6 lg:pt-8">
        <Image
          src={`https://image.tmdb.org/t/p/original${
            movie.backdrop_path || movie.poster_path
          }`}
          style={{
            maxWidth: "100%",
            height: "100%",
          }}
          alt={`${movie.title || movie.name}' poster`}
          width={500}
          height={300}
          placeholder="blur"
          blurDataURL="/spinner.svg"
          className="mb-4 rounded-lg "
        ></Image>
        <div className="p-2">
          <h2 className="mb-3 text-lg font-bold">
            {movie.title || movie.name}
          </h2>
          <p className="mb-3 text-lg">
            <span className="mr-1 font-semibold">Overview:</span>
            {movie.overview}
          </p>
          <p className="mb-3">
            <span className="mr-1 font-semibold">Date Released:</span>
            {movie.release_date || movie.first_air_date}
          </p>
          <p className="mb-3">
            <span className="mr-1 font-semibold">Rating:</span>
            {movie.vote_count}
          </p>
        </div>
      </div>
    </div>
  );
}

export default MovieDetail;
