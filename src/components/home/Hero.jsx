"use client";

import Image from "next/image";
import TypeAnimations from "./TypeAnimations";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { useRef } from "react";

gsap.registerPlugin(useGSAP, MotionPathPlugin, ScrollTrigger);

const Hero = () => {
  const cloud = useRef(null);
  const overlay = useRef(null);
  useGSAP(() => {
    const tl = gsap.timeline();
    tl.to("#logo", {
      opacity: 1,
      ease: "power1",
      duration: 0.5,
    });

    tl.to(".cloudimg", {
      opacity: 1,
      x: 500,
      stagger: {
        amount: 1,
        ease: "power1",
      },
    });
    tl.to(
      ".cloudimg2",
      {
        opacity: 1,
        x: -500,
        stagger: {
          amount: 1,
          ease: "power1",
        },
      },
      "<"
    );
    tl.to("#logo", {
      opacity: 0,
      ease: "power1",
      duration: 0.5,
    });
    tl.to("#overlay", {
      opacity: 0,
      ease: "power1",
      duration: 0.5,
    });

    tl.set(overlay.current, { className: "hidden" });
  }, []);
  return (
    <div
      data-theme="light"
      id="hero"
      className=" relative h-[200vh] flex flex-col lg:flex-row text-center justify-center items-center gap-5"
    >
      <div
        ref={overlay}
        id="overlay"
        className=" z-50 fixed  top-0 h-[100vh] w-screen opacity-100  bg-base-100 flex flex-col justify-center align-middle items-center"
      >
        <Image
          id="logo"
          className=" z-10  pointer-events-none select-none opacity-0   "
          src="/zozox.png"
          alt="Chef zozo overlay logo"
          width={200}
          height={50}
        />

        <Image
          className=" pointer-events-none select-none opacity-1 absolute top-[-40px] left-36 cloudimg   "
          src="/cloud.png"
          alt="clouds"
          width={1000}
          height={1000}
        />
        <Image
          className=" pointer-events-none select-none opacity-1 absolute top-36 cloudimg  "
          src="/cloud2.png"
          alt="clouds"
          width={1000}
          height={1000}
        />
        <Image
          className=" pointer-events-none select-none opacity-1 absolute top-[-50px] cloudimg  "
          src="/cloud2.png"
          alt="clouds"
          width={1000}
          height={1000}
        />
        <Image
          className=" pointer-events-none select-none opacity-1 absolute top-10 left-36 cloudimg  "
          src="/cloud2.png"
          alt="clouds"
          width={1000}
          height={1000}
        />
        <Image
          className=" pointer-events-none select-none opacity-1 absolute top-36 left-10 cloudimg   "
          src="/cloud.png"
          alt="clouds"
          width={1000}
          height={1000}
        />
        <Image
          className=" pointer-events-none select-none opacity-1 absolute top-[-40px] right-36 cloudimg2   "
          src="/cloud.png"
          alt="clouds"
          width={1000}
          height={1000}
        />
        <Image
          className=" pointer-events-none select-none opacity-1 absolute top-36 cloudimg2  "
          src="/cloud2.png"
          alt="clouds"
          width={1000}
          height={1000}
        />
        <Image
          className=" pointer-events-none select-none opacity-1 absolute top-10 right-36 cloudimg2  "
          src="/cloud2.png"
          alt="clouds"
          width={1000}
          height={1000}
        />
        <Image
          className=" pointer-events-none select-none opacity-1 absolute top-36 right-10 cloudimg2   "
          src="/cloud.png"
          alt="clouds"
          width={1000}
          height={1000}
        />
      </div>
      {/* right clouds */}

      <div className=" mx-2 ">
        <h1 className="text-5xl font-bold  bg-gradient-to-br from-primary to-secondary bg-clip-text text-transparent p-3 text-center">
          Chef Zozo
        </h1>
        <TypeAnimations />
        <div className=" px-20 w-[30rem] mt-4 text-balance">
          <p>
            At 3D POS Resturant, we offer exlusive food services with a touch of
            style and sophistication.
          </p>
          <p>
            From classic pizza to modern potatoes, our experienced staff are
            dedicated to providing you with the best experience.
          </p>
        </div>
        <div className=" space-x-5 p-4 mt-5">
          <Link
            href="/#about"
            className=" bg-primary btn-outline btn-circle btn-ghost p-3"
          >
            About Us
          </Link>
          <Link
            href="/menu"
            className="btn-square bg-secondary btn-circle btn-ghost p-3"
          >
            Menu
          </Link>
        </div>
      </div>
      <div>
        <Image
          className="  lg:ml-15 lg:mr-5 px-4  py-2 pointer-events-none select-none"
          src="/greetings.gif"
          alt="Chef zozo greeting you"
          width={500}
          height={500}
        />
      </div>
    </div>
  );
};

export default Hero;
