"use client"

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';


export default function Footer() {

 
  // console.log(totalQuantity);
  const [timer, setTimer] = useState('00:00:00');

  useEffect(() => {
    const targetTime = new Date().getTime() + 24 * 60 * 60 * 1000; // Set your target time
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetTime - now;
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      setTimer(`${hours}:${minutes}:${seconds}`);
      if (distance < 0) {
        clearInterval(interval);
        setTimer('EXPIRED');
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className=" fixed  h-12 md:h-24 w-full lg:hidden mx-auto  bottom-0 bg-[#161f55e3] text-white p-3 flex flex-col mt-6  justify-center items-center md:flex-row">
      <div className="container mx-auto flex justify-center gap-12 items-center flex-col md:flex-row">
        <div className="flex space-x-4 text-sm hidden">
          <Link href="/about" className="hover:underline">About</Link>
          <Link href="/services" className="hover:underline">Services</Link>
          <Link href="/contact" className="hover:underline">Contact</Link>
        </div>
        <div className="flex space-x-4"> 



        <Link href="https://wa.me/+237672221315" target="_blank " rel="noopener noreferrror" >
        <Image src="/whatsapp.png" alt="github" width={24} height={24} />
    </Link>

    <Link href="">
        <Image src="/instagram.png" alt="github" width={24} height={24} />
    </Link>

    <Link href="">
        <Image src="/pinterest.png" alt="github" width={24} height={24} />
    </Link>

    <Link href="">
        <Image src="/facebook.png" alt="github" width={24} height={24} />
    </Link>

   
     
   
        </div>
      </div>
      <div className="text-center mt-4  gap-8 flex items-center justify-center flex-col md:flex-row  hidden ">
      <p className='text-xl md:text-2xl text-yellow-500 font-bold'>50% <span className='text-white'>OFF</span></p>

        <Image src="https://images.pexels.com/photos/298864/pexels-photo-298864.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Countdown Timer" width={200} height={200}  className='rounded-full'/>
        <p className='text-xl md:text-2xl text-yellow-500 font-bold'>{timer}</p>
      </div>
    </footer>
  );
}
