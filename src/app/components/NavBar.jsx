import NavBarItem from "./NavBarItem";

function NavBar() {
  return (
    <div className="flex items-center justify-center bg-amber-100 p-4 dark:bg-gray-600 lg:text-lg">
      <NavBarItem title="Trending" param="fetchTrending" />
      <NavBarItem title="Top Rated" param="fetchTopTrending" />
    </div>
  );
}

export default NavBar;
