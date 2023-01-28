'use client'
import Image from "next/image"
import {motion} from 'framer-motion'
import { fadeIn, staggerContainer, textVariant } from "../lib/motion"
import { TypingText } from "../components"

function Hero() {
  return (
    <motion.section 
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{once: false, amount: 0.25}}
      className="text-white flex flex-col justify-center -mt-12  items-center space-y-6 lg:space-y-12 font-montserrat h-[50vh] lg:h-[70vh]">
      
      <motion.h1 
        variants={textVariant(1.2)}
        className="text-3xl tracking-tighter font-michroma lg:text-7xl ">  
          PAZTG DESIGN
      </motion.h1>
      
      {/* <motion.p 
        variants={textVariant}  
        className="text-[18px] lg:text-[32px]">
          | Motion Graphic Designer |
      </motion.p> */}
      <TypingText title="| Motion Graphic Designer |" />
      
      <motion.div
      variants={fadeIn('down', 'tween', 1.5, 1)}
      >
        <Image src="/arrow-down.svg" width={24} height={24} alt="arrow down"/>
      </motion.div>
      <div className="text-center">
      <p className="uppercase text-[30px] font-bold">2022 Show Reel</p>
      <p className="text-sm">Click the image to play</p>
      </div>
    </motion.section>
  )
}

export default Hero