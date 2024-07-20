import TypeAnimations from "@/components/home/TypeAnimations";
import Link from "next/link";
import Image from "next/image";

const Greeting = () => {
  return (
    <div className="relative mt-[100px] z-20">
      <div className=" mx-2 ">
        <h1 className=" text-5xl drop-shadow-lg font-bold  bg-gradient-to-br from-primary to-slate-800 bg-clip-text text-transparent p-3 text-center">
          Welcome
        </h1>
        <TypeAnimations />
        <div className=" px-20 w-[30rem] mt-4 text-balance font-semibold drop-shadow-xl ">
          <p>
            We specialize in bringing the rich flavors of Iraqi and Arabian
            cuisine straight from our home kitchen to your table. Each dish is
            lovingly prepared with traditional recipes and fresh, authentic
            ingredients.
          </p>
          <p className="mt-5">
            Discover the warmth and depth of our homemade dishes and experience
            a taste of the Middle East like never before.
          </p>
        </div>
        <div className=" space-x-5 p-4 mt-10">
          <Link
            href="/dessert"
            className=" bg-primary text-black btn-outline btn-circle btn-ghost p-3"
          >
            Dessert
          </Link>
          <Link
            href="/menu"
            className="bg-secondary text-black btn-outline btn-circle btn-ghost p-3"
          >
            Menu
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Greeting;
