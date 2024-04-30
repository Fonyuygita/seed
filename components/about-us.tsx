"use client"

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const AboutSection = () => {
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById('aboutSection');
      if (aboutSection) {
        const rect = aboutSection.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
        if (isVisible) {
        //   router.replace(router.asPath, undefined, { scroll: false });
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [router]);

  return (
    <section className='h-screen w-screen px-4  text-white flex flex-col items-center justify-center' id='about'>
    <div id="aboutSection" className="flex flex-col md:flex-row items-center justify-center md:justify-between">
      <motion.div
        className="md:w-1/2 h-full p-4  bg-[#ecbb3342] flex items-start justify-center flex-col gap-6"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-bold mb-4">About Us</h2>
        <p className="text-lg text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu nisi ac nunc ultricies aliquam. Nullam at dapibus mi. Nulla facilisi. Nulla fermentum, leo vel placerat aliquam, velit purus congue nisl, vitae tristique magna magna vel ex.
        </p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-4 rounded">
          Read More
        </button>
      </motion.div>
      <motion.div
        className="md:w-1/2 p-4"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-sm mx-auto bg-feature-bg bg-center bg-no-repeat">
          <Image src="/phones.png" alt="About Image" width={500} height={300} />
        </div>
      </motion.div>
    </div>
    </section>
  );
};

export default AboutSection;