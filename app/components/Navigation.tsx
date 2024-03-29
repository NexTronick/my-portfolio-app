"use client";
import Link from "next/link";
import { useState } from "react";
import IconsMobile from "./IconsMobile";

export default function Navigation({ font_lobster_two = "" }) {
  const [navbar, setNavbar] = useState(false);
  const toggleNavBar = () => {
    if (navbar) {
      setNavbar(false);
    }
  };
  return (
    <header className="top-0 z-50 fixed inset-x-0" id="header-nav">
      <div className="relative">
        <nav className="top-0 z-50 fixed inset-x-0 w-full  drop-shadow-md">
          <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8 w-full">
            <div>
              <div className="flex items-center justify-between py-3 md:py-5 md:block overflow-visible">
                <a href="/" onClick={toggleNavBar}>
                  <h2
                    className={
                      "text-3xl text-cyan overflow-visible " + font_lobster_two
                    }
                  >
                    NP
                  </h2>
                </a>
                <div className="md:hidden">
                  <button
                    className="p-2 text-cyan-dark rounded-md hover:text-cyan-light outline-none focus:text-cyan"
                    onClick={() => setNavbar(!navbar)}
                  >
                    {navbar ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 text-cyan hover:text-cyan-light outline-none focus:text-cyan"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 text-cyan hover:text-cyan-light outline-none focus:text-cyan"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4 6h16M4 12h16M4 18h16"
                        />
                      </svg>
                    )}
                  </button>
                </div>
              </div>
            </div>
            <div>
              <div
                className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                  navbar ? "block" : "hidden"
                }`}
              >
                <ul className="text-cyan text-sm items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                  <li className="hover:text-cyan-dark">
                    <Link href="#about" onClick={toggleNavBar}>
                      About
                    </Link>
                  </li>
                  <li className="hover:text-cyan-dark">
                    <Link href="#experience" onClick={toggleNavBar}>
                      Experience
                    </Link>
                  </li>
                  <li className="hover:text-cyan-dark">
                    <Link href="#education" onClick={toggleNavBar}>
                      Education
                    </Link>
                  </li>
                  <li className="hover:text-cyan-dark">
                    <Link href="#projects" onClick={toggleNavBar}>
                      Projects
                    </Link>
                  </li>
                  <li className="hover:text-cyan-dark">
                    <Link href="#skills" onClick={toggleNavBar}>
                      Skills
                    </Link>
                  </li>
                  {/* <li className="hover:text-cyan-dark">
                    <Link href="#contact" onClick={toggleNavBar}>
                      Contact
                    </Link>
                  </li> */}
                  <li
                    className={
                      "text-cyan border-cyan-dark border-solid border-2 hover:border-dotted hover:text-cyan-dark text-lg px-2 pl-2 " +
                      (navbar ? "inline-block" : "")
                    }
                  >
                    <Link
                      href="/resume/Natraj Niranjan Padwani Resume.pdf"
                      target="_blank"
                      onClick={toggleNavBar}
                    >
                      Resume
                    </Link>
                  </li>
                  {!navbar ? (
                    ""
                  ) : (
                    <li className="">
                      <IconsMobile />
                    </li>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
