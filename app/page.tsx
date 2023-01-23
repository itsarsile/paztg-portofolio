import Hero from "./Hero";
import Reels from "../sections/Reels";
import Works from "./Works";
import GlowWrapper from "../components/GlowWrapper";

function Home() {
  return (
    <div>
      <Hero />
      <Reels />
      <Works />
      <GlowWrapper />
    </div>
  );
}

export default Home;
