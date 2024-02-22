"use client";
import Image, { StaticImageData } from "next/image";
import React, { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

interface ZoomParalaxAnimationProps{
  pictures: StaticImageData[]
}


const ZoomParalaxAnimation = ({pictures}: ZoomParalaxAnimationProps) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const scale4 = useTransform(scrollYProgress, [0, 1], [1, 7]);
  const scale6 = useTransform(scrollYProgress, [0, 1], [1, 9]);
  const scale7 = useTransform(scrollYProgress, [0, 1], [1, 10]);
  const scale5 = useTransform(scrollYProgress, [0, 1], [1, 8]);

  const images = [
    { src: pictures[0], scale: scale4 },
    { src: pictures[1], scale: scale7 },
    { src: pictures[2], scale: scale7 },
    { src: pictures[3], scale: scale5 },
    { src: pictures[4], scale: scale6 },
    { src: pictures[5], scale: scale4 },
    { src: pictures[6], scale: scale7 },
  ];

  return (
    <div ref={container} className="h-[300vh] w-full relative">
      <div className="sticky top-0 h-screen  overflow-hidden">
        {images.map((item, i) => (
          <motion.div
          key={i}
            style={{ scale: item.scale }}
            className="
            w-full 
            h-full  
            absolute 
            top-0 
            flex 
            items-center 
            justify-center
            [&:nth-of-type(1)>div]:w-[15vw]
            [&:nth-of-type(1)]:z-10
            [&:nth-of-type(1)>div]:aspect-square
            [&:nth-of-type(2)>div]:w-[13vw]
            [&:nth-of-type(2)>div]:top-[-2.7vw]
            [&:nth-of-type(2)>div]:aspect-[1/1.6]
            [&:nth-of-type(2)>div]:left-[-16vw]
            [&:nth-of-type(3)>div]:top-[-15vw]
            [&:nth-of-type(3)>div]:w-[20vw]
            [&:nth-of-type(3)>div]:aspect-video
            [&:nth-of-type(3)>div]:left-[2.4vw]
            [&:nth-of-type(4)>div]:top-0
            [&:nth-of-type(4)>div]:w-[20vw]
            [&:nth-of-type(4)>div]:aspect-[12/9]
            [&:nth-of-type(4)>div]:left-[19.4vw]
            [&:nth-of-type(5)>div]:top-[17vw]
            [&:nth-of-type(5)>div]:w-[24vw]
            [&:nth-of-type(5)>div]:aspect-[15/9]
            [&:nth-of-type(5)>div]:left-[-15.6vw]
            [&:nth-of-type(6)>div]:top-[17vw]
            [&:nth-of-type(6)>div]:w-[17vw]
            [&:nth-of-type(6)>div]:aspect-[10.6/9]
            [&:nth-of-type(6)>div]:left-[7.4vw]
            [&:nth-of-type(7)>div]:top-[12.7vw]
            [&:nth-of-type(7)>div]:w-[9vw]
            [&:nth-of-type(7)>div]:aspect-[13.6/9]
            [&:nth-of-type(7)>div]:left-[22.4vw]
            "
          >
            <div className="relative">
              <Image src={item.src} fill alt="image"  className="object-cover" />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ZoomParalaxAnimation;
