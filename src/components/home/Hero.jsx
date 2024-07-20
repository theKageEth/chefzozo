"use client";

import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import useStore from "@/utils/store";
import useSound from "use-sound";

import { useEffect, useRef } from "react";
import Greeting from "./Greeting";

gsap.registerPlugin(useGSAP, MotionPathPlugin, ScrollTrigger);

const Hero = () => {
  const { isChecked, isMuted } = useStore();
  const theme = isChecked ? "dark" : "light";
  const cloud = useRef(null);
  const overlay = useRef(null);

  const [playNight, { stop: stopNight }] = useSound("/sounds/night.mp3", {
    volume: isMuted ? 0 : 0.1,
    loop: true,
  });
  const [playSun, { stop: stopSun }] = useSound("/sounds/morning.mp3", {
    volume: isMuted ? 0 : 0.1,
    loop: true,
  });
  const [playRooster, { stop: stopRooster }] = useSound("/sounds/rooster.mp3", {
    volume: isMuted ? 0 : 0.1,
  });
  const [playOwl, { stop: stopOwl }] = useSound("/sounds/owl.mp3", {
    volume: isMuted ? 0 : 0.1,
  });

  useEffect(() => {
    if (isChecked) {
      // Dark mode selected
      playNight(); // Play night sound
      playOwl(); // Play owl sound
      stopSun(); // Stop sun sound
      stopRooster(); // Stop rooster sound
    } else {
      // Light mode selected
      playSun(); // Play sun sound
      playRooster(); // Play rooster sound
      stopNight(); // Stop night sound
      stopOwl(); // Stop owl sound
    }
    return () => {
      stopNight();
      stopSun();
      stopRooster();
      stopOwl();
    };
  }, [isChecked]);

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.to(".cloudimg", {
      opacity: 1,
      duration: 1.5,
      x: "-50vh",
      ease: "back.inOut",
      stagger: {
        from: "random",
        amount: 0.2,
      },
    });
    tl.to(
      ".cloudimg2",
      {
        opacity: 1,
        duration: 1.5,
        x: "50vh",
        ease: "back.inOut",
        stagger: {
          from: "random",
          amount: 0.3,
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
  useGSAP(() => {
    const tl = gsap.timeline();
    if (isChecked) {
      // Transition to dark mode
      tl.to("#sunPath", {
        duration: 2.5,
        ease: "power1.in",
        opacity: 0,
        motionPath: {
          path: "#circPath",
          align: "#circPath",
          alignOrigin: [0.5, 0.5],
          autoRotate: false,
          start: 1.1, // Start at top right (0.1)
          end: 0.5, // Move to left (west)
        },
      }).to(
        "#moonPath",
        {
          duration: 2.5,
          ease: "power1.in",
          opacity: 1, // Ensure moon becomes visible
          motionPath: {
            path: "#circPath",
            align: "#circPath",
            alignOrigin: [0.5, 0.5],
            autoRotate: false,
            start: 0.5, // Start from bottom
            end: 0.1, // Move to top right
          },
        },
        "-=3"
      ); // Overlap moon animation with sun animation
    } else {
      // Transition to light mode
      tl.to("#moonPath", {
        duration: 2.5,
        ease: "power1.in",
        opacity: 0,
        motionPath: {
          path: "#circPath",
          align: "#circPath",
          alignOrigin: [0.5, 0.5],
          autoRotate: false,
          start: 1.1, // Start from top right
          end: 0.5, // Move to bottom
        },
      }).to(
        "#sunPath",
        {
          duration: 2.5,
          ease: "power1.in",
          opacity: 1, // Ensure sun becomes visible
          motionPath: {
            path: "#circPath",
            align: "#circPath",
            alignOrigin: [0.5, 0.5],
            autoRotate: false,
            start: 0.5, // Start from left (west)
            end: 0.1, // Move to top right
          },
        },
        "-=3"
      ); // Overlap sun animation with moon animation
    }
  }, [isChecked]);
  return (
    <div
      data-theme={theme}
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
          className=" z-10  pointer-events-none select-none    "
          src="/zozox.png"
          alt="Chef zozo overlay logo"
          width={200}
          height={50}
        />

        {/* Cloud Images */}
        <Image
          className="pointer-events-none select-none opacity-1 absolute top-[-40px] left-10 lg:left-36 cloudimg"
          src="/cloud2.png"
          alt="clouds"
          width={500}
          height={500}
        />
        <Image
          className="pointer-events-none select-none opacity-1 absolute top-36 left-10 cloudimg"
          src="/cloud.png"
          alt="clouds"
          width={500}
          height={500}
        />
        <Image
          className="pointer-events-none select-none opacity-1 absolute top-[-20px] left-20 cloudimg"
          src="/cloud.png"
          alt="clouds"
          width={500}
          height={500}
        />
        <Image
          className="pointer-events-none select-none opacity-1 absolute top-10 left-36 cloudimg"
          src="/cloud.png"
          alt="clouds"
          width={500}
          height={500}
        />
        <Image
          className="pointer-events-none select-none opacity-1 absolute top-36 left-0 cloudimg"
          src="/cloud2.png"
          alt="clouds"
          width={500}
          height={500}
        />
        <Image
          className="pointer-events-none select-none opacity-1 absolute top-[-40px] right-10 lg:right-36 cloudimg2"
          src="/clouds.png"
          alt="clouds"
          width={500}
          height={500}
        />
        <Image
          className="pointer-events-none select-none opacity-1 absolute top-36 right-10 cloudimg2"
          src="/cloud.png"
          alt="clouds"
          width={500}
          height={500}
        />
        <Image
          className="pointer-events-none select-none opacity-1 absolute top-10 right-36 cloudimg2"
          src="/cloud2.png"
          alt="clouds"
          width={500}
          height={500}
        />
        <Image
          className="pointer-events-none select-none opacity-1 absolute top-36 right-0 cloudimg2"
          src="/cloud.png"
          alt="clouds"
          width={500}
          height={500}
        />

        {/* bottom */}

        <Image
          className="pointer-events-none select-none opacity-1 absolute bottom-[-40px] left-10 lg:left-36 cloudimg"
          src="/clouds.png"
          alt="clouds"
          width={500}
          height={500}
        />

        <Image
          className="pointer-events-none select-none opacity-1 absolute bottom-10 right-36 cloudimg2"
          src="/cloud2.png"
          alt="clouds"
          width={500}
          height={500}
        />
      </div>
      <Image
        id="sunPath"
        className="pointer-events-none select-none opacity-1 absolute  "
        src="/sun.png"
        alt="sun"
        width={350}
        height={350}
      />
      <Image
        id="moonPath"
        className="opacity-0 pointer-events-none select-none  absolute  "
        src="/moon.png"
        alt="moon"
        width={300}
        height={300}
      />
      <svg
        viewBox="0 0 200 200"
        width={100}
        height={100}
        className="opacity-5 stroke-0 stroke-yellow-200 fixed top-[50px] right-0 w-1/2 h-screen"
      >
        <path id="circPath" d="M 100,10 A 90,90 0 1,1 99.9,10" fill="none" />
      </svg>
      <Image
        className=" absolute top-20 left-5 lg:left-20  px-1  py-2 pointer-events-none select-none"
        src="/greetings.gif"
        alt="Chef zozo greeting you"
        width={400}
        height={250}
      />{" "}
      <div className=" mt-40">
        <Greeting />
      </div>
    </div>
  );
};

export default Hero;
