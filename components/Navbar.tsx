'use client';

import Image from "next/image";
import Link from "next/link";
import { motion } from 'framer-motion';
import { navVariants } from '../lib/motion'

function Navbar() {
  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className="sticky top-0 z-10 text-white flex flex-col justify-center items-center space-y-3 p-6 font-montserrat bg-neutral-900">
      <ul className="flex font-bold items-center gap-5 lg:gap-10 ">
        <li>
          <Link href="#works">
            WORKS
          </Link>
        </li>
        <li>
          <Link href="#pricing">
            PRICING
          </Link>
        </li>
        <li>
          <Link href="/">
            <Image src="logo-dark.svg" alt="paztg-logo" width={48} height={48} />
          </Link>
        </li>
        <li>
          <Link href="/about">
            ABOUT
          </Link>
        </li>
        <li>CONTACT</li>
      </ul>
    </motion.nav>
  )
}

export default Navbar