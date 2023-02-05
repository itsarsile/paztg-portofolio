import Clients from "./Clients";
import Hero from "./Hero";
import Reels from "./Reels";
import Works from "./Works";

function Home() {
  return (
    <div>
      <Hero />
      <Reels />
      <Clients />
      <Works />
    </div>
  );
}

export default Home;
