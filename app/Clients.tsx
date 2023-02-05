'use client'

import Image from 'next/image';
import { useRef } from 'react';
import AutoPlay from 'embla-carousel-autoplay';
import {Carousel} from '@mantine/carousel'

const Clients = () => {
  const autoplay = useRef(AutoPlay({ delay: 2000 }))
  return (
    <div className='flex justify-center mx-auto flex-col text-white font-bold font-montserrat text-center mt-8 max-w-7xl'>
    <h1 className="text-[30px] mb-12 underline-blue font-bold uppercase">
            Clients
        </h1>
      <Carousel
      withControls={false}
      align="start"
      height={150}
      plugins={[autoplay.current]}
      slideSize="30%"
      slideGap="sm"
      loop={true}
      >
        <Carousel.Slide>
          <Image src="/vshojo.png" width="300" height="300" alt=""/>
        </Carousel.Slide>
        <Carousel.Slide>
          <Image src="/vshojo.png" width="300" height="300" alt=""/>
        </Carousel.Slide>
        <Carousel.Slide>
          <Image src="/vshojo.png" width="300" height="300" alt=""/>
        </Carousel.Slide>
        <Carousel.Slide>
          <Image src="/vshojo.png" width="300" height="300" alt=""/>
        </Carousel.Slide>
        <Carousel.Slide>
          <Image src="/vshojo.png" width="300" height="300" alt=""/>
        </Carousel.Slide>
        <Carousel.Slide>
          <Image src="/vshojo.png" width="300" height="300" alt=""/>
        </Carousel.Slide>
      </Carousel>
    </div>
  )
}

export default Clients