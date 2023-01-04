import Image from "next/image"

function Hero() {
  return (
    <section className="text-white flex flex-col justify-center items-center space-y-6 lg:space-y-12 font-montserrat h-[50vh] lg:h-[70vh]">
      <h1 className="text-3xl tracking-tighter font-michroma lg:text-7xl ">PAZTG DESIGN</h1>
      <p className="text-[18px] lg:text-[32px]">| Motion Graphic Designer |</p>
      <Image src="/arrow-down.svg" width={24} height={24} alt="arrow down"/>
      <p className="uppercase">2020 Show Reel</p>
    </section>
  )
}

export default Hero