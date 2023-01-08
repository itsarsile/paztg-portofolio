import '../styles/globals.css'
import Navbar from '../components/Navbar'
import Hero from './Hero'
import Reels from './Reels'
import { Divider } from '@mantine/core'
import Works from './Works'
import { FooterSocial } from '../components/FooterSocial'


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