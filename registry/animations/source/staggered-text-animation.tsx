"use client";

import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";
import { motion } from "framer-motion";

interface StaggeredTextAnimationProps extends HTMLAttributes<HTMLDivElement> {
  text: string;
}

const textAnimationVarient = {
  hidden: { y: 150 },
  visible: { y: 0 },
};

const StaggeredTextAnimation = ({
  text,
  className,
  ...props
}: StaggeredTextAnimationProps) => {
  const textArray = text.split(" ");
  return (
    <div
      className={cn("text-9xl font-semibold flex flex-wrap ", className)}
      {...props}
    >
      {textArray.map((word, workIndex) => (
        <span
          className="
          before:w-full 
          before:h-full 
          before:block 
          before:absolute
          relative
          overflow-hidden
          pb-5"
          key={`${word}--${workIndex}`}
        >
          {word.split("").map((char, charIndex) => (
            <motion.span
              variants={textAnimationVarient}
              initial="hidden"
              animate="visible"
              transition={{
                duration: 0.5,
                delay: charIndex * 0.05,
                ease: [0.44, 0.13, 0.23, 0.96],
              }}
              key={`${char}--${charIndex}`}
              className="inline-block relative z-10"
            >
              {char}
            </motion.span>
          ))}
          <span>&nbsp;</span>
        </span>
      ))}
    </div>
  );
};

export default StaggeredTextAnimation;
