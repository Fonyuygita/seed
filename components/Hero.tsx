"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Handle from './handle';
import HeroButtons from './hero-buttons';
import {motion} from "framer-motion"
import FloatingMouse from './mouse';

const text="Unlock Your Potential"
const HeroSection = () => {
  const [backgroundIndex, setBackgroundIndex] = useState(0);
  const backgrounds = [
    '/heroImage.png',
    '/about1.png',
  '/about3.png',
  '/about2.png',
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
            <div className="max-w-3xl mx-auto  flex items-center gap-5 justify-center flex-col mt-[13rem] md:mt-[16rem]">
              <h1 className="text-2xl md:text-7xl  font-[400] mb-4 leading-[120%]text-bold">
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

              </h1>
              <p className="text-[11px] md:text-lg p-4 text-[#e9e2e2] md:regular-14 text-center w-[100%] md:w-[80%] ">
        
Welcome to SEED, where we sow the seeds of innovation and help your ideas flourish. Just like a diligent gardener, we cultivate cutting-edge technological solutions that empower businesses to thrive in the digital landscape. Join us on a journey of planting and harvesting technology, and watch your organization bloom with success
               
              </p>
              <HeroButtons/>
            </div>
          </div>
        </div>
      </div>
      <FloatingMouse/>

      </div>
      <div className="flex flex-col lg:flex-row items-center justify-center gap-6 absolute top-[60%] left-[15%] mx-auto md:left-[10%]">
      {/* <Handle name='Seed' address='Bamenda' how_many='234' vision='To train young techies' background='bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#ced4de] to-[#ac690d] md:bg-[#213ee08e]'/>

      <Handle name='Seed' address='Bamenda' how_many='234' vision='To train young techies' background='bg-[#1008318a] hidden lg:flex'/>


      <Handle name='Seed' address='Bamenda' how_many='234' vision='To train young techies' background='bg-[#eb8c086c]  hidden lg:flex'/>
       */}

      </div>
    </section>
  );
};

export default HeroSection;