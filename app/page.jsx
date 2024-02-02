import { leaf } from "@/assets";
import { Navbar } from "@/components";
import { Explore, Hero } from "@/sections";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Navbar />

      <section className="relative bg-[#f0f4ec]">
        <div>
          <Image src={leaf} alt="leaf" height={200} width={300} className="object-containt absolute -left-12 top-[15%] blur-[2px] rotate-[20deg] "/>
        </div>
        <div>
          <Image src={leaf} alt="leaf" height={200} width={250} className="object-containt absolute right-[10%] top-[15%] blur-[2px] rotate-[20deg] "/>
        </div>
        <Hero />
      </section>
      <section className="padding bg-[#FFF2F9]">
        <Explore />
      </section>
    </main>
  );
}
