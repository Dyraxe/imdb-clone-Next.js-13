"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

function NavBarItem({ title, param }) {
  const genre = useSearchParams().get("genre");
  return (
    <div>
      <Link
        className={`m-4 p-2 font-semibold transition-colors delay-75 hover:text-amber-600 ${
          genre === param &&
          "rounded-lg  underline decoration-amber-500 decoration-4 underline-offset-8"
        }`}
        href={`/?genre=${param}`}
      >
        {title}
      </Link>
    </div>
  );
}

export default NavBarItem;
