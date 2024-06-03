"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "./ui/herohilight";
import MagicButton from "./ui/magic";
import { FaLocationArrow } from "react-icons/fa6";

export function HeroHighlightDemo() {
  return (
    <HeroHighlight className="w-full">
      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto whitespace-nowrap z-10"
      >
        Hi, This is Karthikeya varma <br />
        I&apos;m a{" "}
        <Highlight className="text-white">Frontend Developer</Highlight>
      </motion.h1>

      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto whitespace-nowrap z-10 flex items-center justify-center"
      >
        <a href="#about">
          <MagicButton
            title="See my work"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </motion.h1>
    </HeroHighlight>
  );
}
