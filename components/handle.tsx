import Image from 'next/image'
import React from 'react'

const Handle = () => {
  return (
    <div className="">
    <div className="relative z-20 flex w-[268px] flex-col gap-8 rounded-3xl bg-[#c28023] px-7 py-8  border-t-4 border-[#192936] md:w-[400px]">

       <div className="flex flex-col">
        <div className="flexBetween">
          <p className="regular-16 text-gray-20">Location</p>
          <Image src="/close.svg" alt="close" width={24} height={24} />
        </div>
        <p className="bold-20 text-white">Cameroon-Bamenda</p>
      </div>

      <div className="flexBetween">
        <div className="flex flex-col">
          <p className="regular-16 block text-gray-20">Distance</p>
          <p className="bold-20 text-white">173.28 mi</p>
        </div>
        <div className="flex flex-col">
          <p className="regular-16 block text-gray-20">Elevation</p>
          <p className="bold-20 text-white">2.040 km</p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Handle
