import Image from "next/image";
import {Hero} from "@/components/sections/Hero";
import {BohneurSection} from "@/components/sections/BonheurSection";
import {SolarBurnSection} from "@/components/sections/SolarBurnSection";
import {MoonDropSection} from "@/components/sections/MoonDropSection";
import {HearthQuakeSection} from "@/components/sections/EarthQuakeSection";
import {Footer} from "@/components/footers/Footer";

export default function Home() {
  return (
    <div>
      <Hero/>
        <BohneurSection/>
        <SolarBurnSection/>
        <MoonDropSection/>
      <HearthQuakeSection/>
        <Footer/>
    </div>);
}
