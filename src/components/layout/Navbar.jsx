"use client";

import { useState, useEffect } from "react";
import { getSession, signOut } from "next-auth/react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [session, setSession] = useState(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const fetchSession = async () => {
      const session = await getSession();
      setSession(session);
    };
    fetchSession();
  }, []);

  return (
    <nav className="bg-primary shadow-md backdrop-blur-lg  bg-opacity-20 fixed top-0 w-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link href="/">
              <div className="flex flex-row items-center gap-3 hover:scale-125 transition duration-300 ease-in-out">
                <Image src="/zozo.png" width={50} height={50} alt="Chef ZOZO" />
                <p className="text-white hover:text-secondary font-bold text-2xl">
                  Chef ZOZO
                </p>
              </div>
            </Link>
          </div>
          <div className="hidden md:block mr-20">
            <div className="ml-10 flex justify-start items-center space-x-4 ">
              <a
                href="/"
                className="text-white hover:text-secondary px-3 py-2 rounded-md  font-medium text-2xl"
              >
                Menu
              </a>

              <a
                href="/services"
                className="text-white hover:text-secondary px-3 py-2 rounded-md text-2xl font-medium"
              >
                Dessert
              </a>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-secondary mr-10 "
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
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
        className={`${isOpen ? "block" : "hidden"} md:hidden`}
        id="mobile-menu"
      >
        <div className=" flex flex-col px-2 pt-2 pb-3 space-y-1 sm:px-3 justify-center align-middle items-center border-t-4">
          <a
            href="/"
            className="text-white hover:text-secondary px-3 py-2 rounded-md text-sm font-medium"
          >
            Menu
          </a>

          <a
            href="/services"
            className="text-white hover:text-secondary px-3 py-2 rounded-md text-sm font-medium"
          >
            Dessert
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
