import Footer from "@/Components/Footer/Footer";
import Header from "@/Components/Header/Header";
import Card from "@/Components/Homepage/Card";
import Globe from "@/Components/Homepage/Globe";
import Hero from "@/Components/Homepage/Hero";
import { GlobeDemo } from "@/Components/Homepage/HeroGlobe";
import { Newsletter } from "@/Components/Homepage/Newsletter";
import OurMission from "@/Components/Homepage/OurMission";
import { AnimatedTooltipPreview } from "@/Components/Homepage/OurTeam";
import { InfiniteMovingCardsDemo } from "@/Components/Homepage/WhyToChoese";
import { AnimatedPinDemo } from "@/Components/Homepage/WhyToChoese2";


export default function Home() {
  return (
   <div>
   <Header></Header>
   <Globe></Globe>
   <AnimatedTooltipPreview></AnimatedTooltipPreview>
   <InfiniteMovingCardsDemo></InfiniteMovingCardsDemo>
   <OurMission></OurMission>
   <AnimatedPinDemo></AnimatedPinDemo>
   <Newsletter></Newsletter>
   <Footer></Footer>
   <Card></Card>
   </div>
  );
}
