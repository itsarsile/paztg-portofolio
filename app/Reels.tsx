'use client'
import {motion} from 'framer-motion'
import YouTubeLazyLoad from "../components/YouTubeLazyLoad"
import { fadeIn } from '../lib/motion'


function Reels() {
  return (
    <motion.div 
      variants={fadeIn('up', 'tween', 0.25, 0.5)}
      initial="hidden"
      whileInView="show"
      className="flex justify-center items-center -mt-24"
    >
      <YouTubeLazyLoad youtubeId="jagncTkYq_Y"/>
      {/* <div className="gradient-1  "/> */}
    </motion.div>
  )
}
export default Reels