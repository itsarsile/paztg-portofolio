'use client';
import { videos } from '../constants';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../lib/motion';

const Works = () => {
  return (
    <div className='flex justify-center flex-col items-center text-white font-montserrat mt-12 divide-y-8' id="works">
        <h1 className="text-[30px] mb-12 underline-blue font-bold uppercase">
            Works
        </h1>
        <motion.div 
          className='grid border-none sm:grid-rows-1 lg:grid-cols-3 max-w-7xl'
          variants={staggerContainer()}
          initial="hidden"
          whileInView="show"
          viewport={{once: false, amount: 0.25}}
        >
          {videos.map((video, index) => (
            <motion.img
              initial="hidden"
              whileInView="show"
              variants={fadeIn('up', 'tween', index * 0.2, 1)}
              whileHover={{ scale: 1.1 }}
              whileTap={{scale: 1.0}}
              key={video.key}
              src={`https://img.youtube.com/vi/${video.videoId}/maxresdefault.jpg`}
              alt=""
              width="1280"
              height="720"
              className=''
            />
          ))}
        </motion.div>

        {/* <div className="flex">
          {videos.map((video) =>(
            <motion.img
              src={`https://img.youtube.com/vi/${video.videoId}/maxresdefault.jpg`}
              alt=""
              className='h-full'
            />
          ))}
        </div> */}
    </div>
  )
}

export default Works