'use client';
import {videos} from '../constants';
import {motion} from 'framer-motion';

const Works = () => {
  return (
    <div className='flex justify-center flex-col items-center text-white font-montserrat mt-12 divide-y-8' id="works">
        <h1 className="text-[30px] mb-12">
            Works
        </h1>
        <div className='grid sm:grid-rows-1 lg:grid-cols-3 max-w-7xl'>
          {videos.map((video) => (
            <motion.img 
            whileHover={{ scale: 1.1 }}
            whileTap={{scale: 1.0}}
            key={video.key}
            src={`https://img.youtube.com/vi/${video.videoId}/maxresdefault.jpg`}
            alt=""
            width="1280"
            height="720"
            className='-mt-3'
            />
          ))}
        </div>

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