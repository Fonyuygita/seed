"use client"

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import type { FC } from 'react';
import { InView } from 'react-intersection-observer';

interface HeaderProps {
  title: string;
  description: string;
}

const Header: FC<HeaderProps> = ({ title, description }) => {
  const [isFloating, setIsFloating] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsFloating(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const headerVariants = {
    float: {
      x: ["-5%", "5%"], // Adjust the values to control the floating range
      transition: {
        x: {
          duration: 2, // Duration of one cycle (left and right)
          ease: "easeInOut",
          repeat: InView,
          repeatType: "mirror",
        },
      },
    },
  };

  return (
    <motion.header
      initial="float"
      animate={isFloating ? 'float' : ''}
      variants={headerVariants}
      className={`fixed top-0 left-0 w-full bg-white shadow-md z-10 ${
        isFloating ? 'pointer-events-none' : ''
      }`}
    >
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center py-6 md:justify-start md:space-x-10'>
          <div className='lg:w-0 lg:flex-1'>
            <h1 className='text-2xl font-bold text-gray-900'>{title}</h1>
            <p className='mt-2 text-sm text-gray-500'>{description}</p>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
