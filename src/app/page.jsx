import Hero from "@/components/home/Hero";
import ParticlesBackground from "@/components/ParticlesBackground";

export default function Home() {
  return (
    <>
      <div className=" relative overflow-x-hidden">
        <ParticlesBackground />
        <Hero />
      </div>
    </>
  );
}
