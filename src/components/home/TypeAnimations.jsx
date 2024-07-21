"use client";

import { TypeAnimation } from "react-type-animation";

const TypeAnimations = () => {
  return (
    <TypeAnimation
      preRenderFirstString={true}
      className="whitespace-pre-line text-2xl font-bold bg-gradient-to-br from-secondary to-slate-500 bg-clip-text text-transparent p-3 mx-3  "
      sequence={[
        2000,
        "To My Kitchen",
        2000,
        "Iraqi Dining\nExperience",
        1000,
        "Authentic Arabian\nFlavors",
        2000,
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: "2em", display: "inline-block" }}
      repeat={0}
    />
  );
};
export default TypeAnimations;
