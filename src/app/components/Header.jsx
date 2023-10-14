import Link from "next/link";
import MenuItem from "./MenuItem";
import { AiFillHome, AiFillInfoCircle } from "react-icons/ai";

function Header() {
  return (
    <div className="mx-2 flex max-w-6xl items-center justify-between py-6 sm:mx-auto">
      <div className="flex">
        <MenuItem title="HOME" address="/" Icon={AiFillHome} />
        <MenuItem title="ABOUT" address="/about" Icon={AiFillInfoCircle} />
      </div>
      <div className="">
        <Link href="/">
          <h2 className="text-2xl">
            <span className="rounded-lg bg-amber-500 px-2 py-1 font-bold sm:mr-1">
              IMDb
            </span>
            <span className="hidden text-xl sm:inline">Clone</span>
          </h2>
        </Link>
      </div>
    </div>
  );
}

export default Header;
