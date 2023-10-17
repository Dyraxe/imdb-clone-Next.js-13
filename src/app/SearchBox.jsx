"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

function SearchBox({ defaultSearch = "" }) {
  const router = useRouter();
  const [search, setSearch] = useState(defaultSearch);
  //   console.log(search);
  // this will log on the browser since it's on use client
  //but normally this would be on the console since it is on server side
  function handleSubmit(e) {
    e.preventDefault();
    if (!search || search.length < 3) return;
    router.push(`search/${search}`);
  }
  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto flex max-w-6xl items-center justify-between px-5"
    >
      <input
        value={search}
        className="h-14 w-full flex-1 rounded-sm bg-transparent placeholder-gray-500 outline-none"
        type="text"
        placeholder="Search keywords..."
        onChange={(e) => setSearch(e.target.value)}
      />
      <button
        disabled={search.length < 3}
        className="text-amber-600 disabled:text-gray-400"
        type="submit"
      >
        Search
      </button>
    </form>
  );
}

export default SearchBox;
