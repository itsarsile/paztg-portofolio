'use client';

import Image from "next/image";
import Link from "next/link";

function Navbar() {
  return (
    <nav className="sticky top-0 z-10 text-white flex flex-col justify-center items-center space-y-3 p-6 font-montserrat bg-neutral-900">
        <Link href="/">
        <Image src="logo-dark.svg" alt="paztg-logo" width={48} height={48}/>
        </Link>
        <ul className="flex gap-5 lg:gap-10 ">
            <li>
              <Link href="#works">
                WORKS
              </Link>
            </li>
            <li>
              <Link href="/about">
                ABOUT
              </Link>
            </li>
            <li>CONTACT</li>
        </ul>
    </nav>
  )
}

export default Navbar