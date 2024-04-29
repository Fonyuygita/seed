import Image from 'next/image'
import React from 'react'

interface handleProps {
  name:string;
  address:string;
  how_many?:string;
  vision?:string;
  background:string


}
const Handle = ({name, address, how_many, vision, background}:handleProps) => {
  return (
    <div className="">
    <div className={`relative z-20 flex w-[268px] flex-col gap-8 rounded-3xl ${background} px-7 py-8  border-t-4 border-[#192936] md:w-[400px]`}>

       <div className="flex flex-col">
        <div className="flexBetween">
          <p className="regular-16 text-gray-20">{name}</p>
          <Image src="/close.svg" alt="close" width={24} height={24} />
        </div>
        <p className="bold-20 text-white">{address}</p>
      </div>

      <div className="flexBetween">
        <div className="flex flex-col">
          <p className="regular-16 block text-gray-20">about</p>
          <p className="bold-20 text-white">{how_many}</p>
        </div>
        <div className="flex flex-col">
          <p className="regular-16 block text-gray-20">Elevation</p>
          <p className="bold-20 text-white">{vision}</p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Handle
