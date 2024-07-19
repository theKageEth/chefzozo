import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import Hero from "@/components/home/Hero";

export default function Home() {
  return (
    <>
      <div className=" relative overflow-x-hidden">
        <Navbar />
        <Hero />

        <Footer />
      </div>
    </>
  );
}
