'use client'
import { motion } from 'framer-motion'
import { textContainer, textVariant2 } from '../lib/motion'


export const TypingText = ( { title }) => (
    <motion.p
    variants={textContainer}
    >
        {Array.from(title).map((letter ,index) => (
            <motion.span variants={textVariant2} key={index}>
                {letter === ' ' ? '\u00A0' : letter}
            </motion.span>
        ))}
    </motion.p>
)