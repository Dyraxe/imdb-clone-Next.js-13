import Image from "next/image";
import Link from "next/link";
import { FiThumbsUp } from "react-icons/fi";
function Card({ result }) {
  return (
    <div className="group cursor-pointer rounded-lg transition-shadow duration-200 sm:m-2 sm:border sm:border-slate-400 sm:p-3 sm:hover:shadow-md sm:hover:shadow-slate-400">
      <Link href={`movie/${result.id}`}>
        <Image
          src={`https://image.tmdb.org/t/p/original${
            result.backdrop_path || result.poster_path
          }`}
          style={{
            maxWidth: "100%",
            height: "auto",
          }}
          alt={`${result.title || result.name}' poster`}
          width={500}
          height={300}
          placeholder="blur"
          blurDataURL="/spinner.svg"
          className="transition-opacity duration-200 group-hover:opacity-80 sm:rounded-t-lg"
        ></Image>
        {/* Details section */}
        <div className="p-2">
          <p className="line-clamp-2 text-sm">{result.overview}</p>
          <h2 className="truncate text-lg font-bold">
            {result.title || result.name}
          </h2>
          <p className="flex items-center ">
            {result.release_date || result.first_air_date}
            <FiThumbsUp className="ml-3 mr-1 h-5" /> {result.vote_count}
          </p>
        </div>
      </Link>
    </div>
  );
}

export default Card;
