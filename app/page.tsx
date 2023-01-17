import Navbar from '../components/Navbar'
import Hero from './Hero'
import Reels from './Reels'
import Works from './Works'


function Home() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Reels/>
      <Works />
    </div>
  )
}

export default Home