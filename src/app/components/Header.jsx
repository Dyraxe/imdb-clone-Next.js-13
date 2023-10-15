import Link from "next/link";
import MenuItem from "./MenuItem";
import { AiFillHome, AiFillInfoCircle } from "react-icons/ai";
import DarkModeSwitch from "./DarkModeSwitch";

function Header() {
  return (
    <div className="mr-3 flex max-w-6xl select-none items-center justify-between sm:mx-auto  sm:py-1 sm:pr-4">
      <div className="flex">
        <MenuItem title="HOME" address="/" Icon={AiFillHome} />
        <MenuItem title="ABOUT" address="/about" Icon={AiFillInfoCircle} />
      </div>
      <div className="flex items-center justify-between space-x-5 sm:pt-2">
        <DarkModeSwitch />
        <Link href="/">
          <h2 className="text-2xl">
            <span className="rounded-lg bg-amber-500 px-2 py-1 font-bold text-slate-50 sm:mr-1">
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
