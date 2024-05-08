import Link from 'next/link'
import React from 'react'

const HeroButtons = () => {
  return (
    <div className='flex items-center justify-center gap-5 mt-[30px]'>
      <Link href="/register">
      <button className='text-black border-none outline-none px-6 py-3 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#ced4de] to-[#ac690d] cursor-pointer'>Register</button>
      </Link>
        <Link href="/login">
        <button className='text-white border-2 border-[#fff] px-6 py-2 outline-none p-5 bg-transparent cursor-pointer'>Login</button>
        </Link>

      
    </div>
  )
}

export default HeroButtons
