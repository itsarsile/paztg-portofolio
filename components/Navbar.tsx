'use client';

import Image from "next/image";
import Link from "next/link";
import { useState } from 'react';
import { motion, AnimateSharedLayout } from 'framer-motion';
import { pagelinks } from "../constants";
import { navVariants } from '../lib/motion'

function Navbar() {
  const [selected, setSelected] = useState(0);
  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className="sticky top-0 z-10 text-white flex flex-col justify-center items-center space-y-3 p-6 font-montserrat bg-neutral-900">
      <ul className="flex font-bold items-center gap-5 lg:gap-10 ">
          <li>
            <Link href="#works" className="underline-hover">
              WORKS
            </Link>
          </li>
          <li>
            <Link href="#pricing" className="underline-hover">
              PRICING
            </Link>
          </li>
          <li>
            <Link href="/">
              <Image src="logo-dark.svg" alt="paztg-logo" width={48} height={48} />
            </Link>
          </li>
          <li>
            <Link href="/about" className="underline-hover">
              ABOUT
            </Link>
          </li>
          <li>
            <Link href="/contact" className="underline-hover">
              CONTACT
            </Link>
          </li>
      </ul>
    </motion.nav>
  )
}

export default Navbar