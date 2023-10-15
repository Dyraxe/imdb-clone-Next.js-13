import Link from "next/link";
import tmdb from "../assets/tmdb.svg";
import Image from "next/image";
function Footer() {
  return (
    <div className="mx-auto bg-blue-100 px-4 pb-4 pt-2 dark:bg-[#0d253f]">
      <Link
        href="https://www.themoviedb.org/"
        className="flex items-center gap-4 "
      >
        <span className="text-sm font-semibold transition-transform delay-300 hover:translate-x-2">
          API provided by themoviedb &rarr;
        </span>
        <Image className=" max-w-[3rem]" src={tmdb} alt="the movie db logo" />
      </Link>
    </div>
  );
}

export default Footer;

/*
import styled from "styled-components";

const StyledLogo = styled.div`
  text-align: center;
`;

const Img = styled.img`
  height: 9.6rem;
  width: auto;
`;

function Logo() {
  return (
    <StyledLogo>
      <Img src="logo-light.png" alt="Logo" />
    </StyledLogo>
  );
}

export default Logo;

*/
