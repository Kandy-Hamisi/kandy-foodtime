import { leaf } from "@/assets";
import { Footer, Navbar } from "@/components";
import { Download, Explore, FAQs, Hero, WhyUS } from "@/sections";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Navbar />

      <section className="relative bg-[#f0f4ec] padding">
        <div className="hidden xl:block -z-20">
          <Image src={leaf} alt="leaf" height={200} width={300} className="object-containt absolute xl:-left-48 2xl:-left-12 xl:top-[15%] blur-[2px] rotate-[20deg] "/>
        </div>
        <div className="hidden xl:block">
          <Image src={leaf} alt="leaf" height={200} width={250} className="object-containt absolute xl:right-[10%] xl:top-[15%] blur-[2px] rotate-[20deg] "/>
        </div>
        <Hero />
      </section>
      <section className="padding bg-[#FFF2F9]">
        <Explore />
      </section>
      <section className="padding">
        <WhyUS />
      </section>
      <section className="padding">
        <FAQs />
      </section>
      <section className="padding bg-[#FFF3E5]">
        <Download />
      </section>
      <section className="padding bg-[#224300]">
        <Footer />
      </section>
    </main>
  );
}
