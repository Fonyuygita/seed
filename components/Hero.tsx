"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Handle from './handle';
import HeroButtons from './hero-buttons';
import {motion} from "framer-motion"

const text="Unlock Your Potential"
const HeroSection = () => {
  const [backgroundIndex, setBackgroundIndex] = useState(0);
  const backgrounds = [
    '/heroImage.png',
    '/heroImage.png',
    '/heroImage.png',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setBackgroundIndex((prevIndex) =>
        prevIndex === backgrounds.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative ">
      <div className="flex w-full h-[100vh] items-center justify-between  ">
   
     
      <div className="relative w-full h-full">
        <div className="absolute inset-0">
          <Image
            src={backgrounds[backgroundIndex]}
            alt="Background Image"
            layout="fill"
            objectFit="cover"
          />
          <div
            className="absolute inset-0 bg-black opacity-50"
            aria-hidden="true"
          ></div>
        </div>
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-b from-[#13163f] to-[#0c345ca9] opacity-75 h-[100vh]"></div>
          <div className="relative px-8 py-12 text-white ]">
            <div className="max-w-3xl mx-auto  flex items-center gap-8 justify-center flex-col mt-[9rem]">
              <h2 className="text-2xl md:text-4xl font-bold mb-4">
              {text.split("").map((letter, index) => (
            <motion.span
              key={index}
              className=""
              initial={{ opacity: 1 }}
              animate={{ opacity: 0 }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: index * 0.1,
              }}
            >
              {letter}
            </motion.span>
          ))}

              </h2>
              <p className="text-lg">
                We empower businesses with innovative software solutions that drive growth and success.
              </p>
              <HeroButtons/>
            </div>
          </div>
        </div>
      </div>

      </div>
      <div className="flex flex-col md:flex-row items-center justify-center gap-6 absolute top-[66%] left-[15%] md:left-[10%]">
      <Handle/>
      <Handle/>
      <Handle/>

      </div>
    </section>
  );
};

export default HeroSection;