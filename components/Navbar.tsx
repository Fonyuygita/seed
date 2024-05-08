"use client"
import { useState } from 'react';
import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed flexBetween w-full padding-container z-30 py-5 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#535ab8e3] to-[#100735f8]">
      <Link href="/">
        
          <Image src="/seed.png" alt="logo" width={74} height={29} />
        
      </Link>

      {/* Mobile menu button */}
      <div className="lg:hidden">
        <Link href="" onClick={() => setIsOpen(!isOpen)}>
          <Image 
            src="menu.svg"
            alt="menu"
            width={32}
            height={32}
            className="cursor-pointer text-white"
          />
        </Link>
      </div>

      {/* Mobile menu content */}
      <div className={`absolute top-full left-0 w-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#535ab8e3] to-[#100735f8] transition-transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:hidden`}>
        <ul className="flex flex-col items-center gap-6 p-5">
          {NAV_LINKS.map((link) => (
            
              <Link href={link.href} key={link.key} className="regular-16 text-[#dba965] flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">
                
                  {link.label}
                
              </Link>
            
          ))}
        </ul>
      </div>

      {/* Desktop menu content */}
      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
         
            <Link href={link.href} key={link.key} className="regular-16 text-[#dba965] flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">
              {link.label}
            
            </Link>
         
        ))}
      </ul>

      <Link href="/register" className="lg:flexCenter hidden">
        <Button 
          type="button"
          title="Register"
          icon="/user.svg"
          variant="btn_dark_green"
        />
      </Link>
    </nav>
  );
};

export default Navbar;
