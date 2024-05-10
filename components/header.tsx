import Image from 'next/image';
import React from 'react'
import { Interface } from 'readline'
``

interface headerProps {
title:string;
description:string;
}
const Header = ({title, description}:headerProps) => {
  return (
    <div className="relative flex flex-col gap-6">


    <h2 className=" text-4xl lg:text-5xl font-bold mb-4 text-black text-bold my-4 text-center tracking-wide">{title}</h2>
    <Image
      src="/path.png"
      className="w-[336px] h-[15px] absolute top-[23%] right-[15%] md:top-[35%] md:right-[43%] object-contain mx-auto"
      width={336}
      height={15}
      alt='line'
      
    />
    
<p className='text-center w-[90%] md:w-[30%] mx-auto'>
{description}
</p>
    </div>
  )
}
``
export default Header
