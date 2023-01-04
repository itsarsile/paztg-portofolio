import '../styles/globals.css'
import Navbar from '../components/Navbar'
import Hero from './Hero'
import Reels from './Reels'

function Home() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Reels/>
    </div>
  )
}

export default Home