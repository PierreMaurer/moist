import {Hero} from "@/components/sections/Hero";
import {BohneurSection} from "@/components/sections/BonheurSection";
import {SolarBurnSection} from "@/components/sections/SolarBurnSection";
import {MoonDropSection} from "@/components/sections/MoonDropSection";
import {HearthQuakeSection} from "@/components/sections/EarthQuakeSection";
import {Footer} from "@/components/footers/Footer";
import {Can} from "@/components/threejs/Can";

export default function Home() {
  return (
    <div>
        <Can/>
      <Hero/>
        <BohneurSection/>
        <SolarBurnSection/>
        <MoonDropSection/>
      <HearthQuakeSection/>
        <Footer/>
    </div>);
}
