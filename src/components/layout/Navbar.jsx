"use client";

import { useState, useEffect } from "react";
import useStore from "@/utils/store";
import Link from "next/link";
import Image from "next/image";
import { MdLightMode } from "react-icons/md";
import {
  BsMoonStarsFill,
  BsFillVolumeDownFill,
  BsFillVolumeMuteFill,
  BsFillVolumeOffFill,
} from "react-icons/bs";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [lastScrollY, setLastScrollY] = useState(0);
  const [navVisible, setNavVisible] = useState(true);
  const { isChecked, toggleTheme, isMuted, toggleMute } = useStore();
  const threshold = 200;

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    // Case 1: Scroll position within the top threshold
    if (currentScrollY <= threshold) {
      setNavVisible(true);
    }
    // Case 2: Scrolling down past the threshold
    else if (currentScrollY > lastScrollY && currentScrollY > threshold) {
      setNavVisible(false);
    }
    // Case 3: Scrolling up from beyond the threshold
    else if (currentScrollY < lastScrollY) {
      setNavVisible(true);
    }

    // Update lastScrollY value
    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed z-30  top-0 border-b-4  pt-2 md:pt-3 w-full transition-transform duration-300 bg-primary ${
        navVisible ? "transform translate-y-0" : "transform -translate-y-full"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center ">
          <div className="flex-shrink-0 ">
            <Link href="/">
              <div className=" md:ml-5 flex flex-row items-center gap-1 hover:scale-110 transition duration-300 ease-in-out">
                <Image
                  src="/zozox.png"
                  width={50}
                  height={50}
                  alt="Chef ZOZO"
                  className="pb-2"
                />
                <p className="text-white hover:text-secondary font-bold text-base lg:text-2xl ">
                  Chef ZOZO
                </p>
              </div>
            </Link>
          </div>
          <label className="swap swap-flip text-3xl lg:text-4xl absolute right-5 top-20 lg:right-24 ">
            <input type="checkbox" checked={isChecked} onChange={toggleTheme} />
            <div className="swap-on text-primary">
              <MdLightMode />
            </div>
            <div className="swap-off  text-primary">
              <BsMoonStarsFill />
            </div>
          </label>
          <label className="text-secondary swap  text-3xl lg:text-4xl absolute right-14 lg:right-36 top-20 ">
            <input type="checkbox" checked={isMuted} onChange={toggleMute} />
            <div className="swap-on">
              <BsFillVolumeOffFill />
            </div>
            <div className="swap-off">
              <BsFillVolumeDownFill />
            </div>
          </label>
          <div className="hidden md:block mr-20">
            <div className="ml-10 flex justify-start items-center space-x-4 ">
              <a
                href="/menu"
                className="text-white hover:text-secondary px-3 py-2 rounded-md  font-semibold text-2xl"
              >
                Menu
              </a>

              <a
                href="/dessert"
                className="text-white hover:text-secondary px-3 py-2 rounded-md text-2xl font-semibold"
              >
                Dessert
              </a>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-secondary mr-2 "
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              {isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`${
          isOpen ? "block" : "hidden"
        } md:hidden bg-opacity-25 bg-secondary`}
        id="mobile-menu"
      >
        <div className=" flex flex-col px-2 pt-2 pb-3 space-y-1 sm:px-3 justify-center align-middle items-center border-t-4">
          <a
            href="/menu"
            className="text-white  hover:text-secondary px-3 py-2 rounded-md text-sm font-semibold"
          >
            Menu
          </a>

          <a
            href="/dessert"
            className="text-white hover:text-secondary px-3 py-2 rounded-md text-sm font-semibold"
          >
            Dessert
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
