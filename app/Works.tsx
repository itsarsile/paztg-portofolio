'use client';
import Image from 'next/image';
import {videos} from '../constants';

const Works = () => {
  return (
    <div className='flex justify-center flex-col items-center text-white font-montserrat mt-12'>
        <h1 className="text-[30px] mb-12">
            Works
        </h1>
        <div className='grid gap-3 sm:grid-rows-1 lg:grid-cols-3 max-w-7xl'>
          {videos.map((video) => (
            <Image 
            key={video.key}
            src={`https://img.youtube.com/vi/${video.videoId}/maxresdefault.jpg`}
            alt=""
            width={1280}
            height="720"
            />
          ))}
        </div>
    </div>
  )
}

export default Works