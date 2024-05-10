"use client"

import {motion} from "framer-motion"

import Link from 'next/link';
import { FaMouse } from 'react-icons/fa';


const floatVariants = {
  animate: {
    y: ["0%", "-30%"], // Adjust the values to control the floating range
    transition: {
      y: {
        duration: 2, // Duration of one cycle (up and down)
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "reverse",
      },
    },
  },
};


const FloatingMouse = () => {
  return (
    <Link href="#about" className="absolute bottom-2 left-1/2 transform -translate-x-1/2 py-4">
        <motion.div
        variants={floatVariants}
        animate="animate"
        className="py-4"
      >
        <FaMouse className="text-2xl text-white" />
      </motion.div>
    </Link>
  );
};

export default FloatingMouse;