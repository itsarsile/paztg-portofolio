'use client'

import Image from 'next/image';
import { useRef } from 'react';
import AutoPlay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';
import {Carousel} from '@mantine/carousel'

const Clients = () => {
  const autoplay = useRef(AutoPlay({ delay: 2000 }))
  return (
    <div className='flex justify-center mx-auto flex-col text-white font-bold font-montserrat text-center mt-8 max-w-7xl'>
    <h1 className="text-[30px] mb-12 underline-blue font-bold uppercase">
            Clients
        </h1>
      <Carousel
      loop
      withControls={false}
      align="start"
      height={150}
      plugins={[autoplay.current]}
      slideSize="30%"
      slideGap="sm"
      >
        <Carousel.Slide>
          <Image src="/vshojo.png" width="300" height="300" alt="" className='object-contain object-center'/>
        </Carousel.Slide>
        <Carousel.Slide>
          <Image src="/hololive.svg" width="300" height="300" alt="" className="object-contain object-center"/>
        </Carousel.Slide>
        <Carousel.Slide>
          <Image src="/metanoia.svg" width="300" height="300" alt="" className='object-contain object-center'/>
        </Carousel.Slide>
        <Carousel.Slide>
          <Image src="/prismproject.svg" width="300" height="300" alt="" className='invert object-contain object-center'/>
        </Carousel.Slide>
        <Carousel.Slide>
          <Image src="/idol.svg" width="300" height="300" alt="" className="object-contain object-center"/>
        </Carousel.Slide>
      </Carousel>
    </div>
  )
}

export default Clients