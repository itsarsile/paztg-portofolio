'use client';

import Image from "next/image";

function Navbar() {
  return (
    <nav className="text-white flex flex-col justify-center items-center space-y-3 p-5 font-montserrat">
        <Image src="logo-dark.svg" alt="" width={48} height={48}/>
        <ul className="flex gap-3">
            <li>WORKS</li>
            <li>ABOUT</li>
            <li>CONTACT</li>
        </ul>
    </nav>
  )
}

export default Navbar