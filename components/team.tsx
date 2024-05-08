"use client"

import { motion } from 'framer-motion';
import { FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';

// Define the shape of your team member object
type TeamMember = {
  name: string;
  role: string;
  image: string;
  description?:string;
  twitterHandle: string;
  linkedInHandle: string;
  instagramHandle: string;
};

// Sample data for team members
const teamMembers: TeamMember[] = [
  {
    name: 'Cheko Yohane',
    role: 'CEO',
    image: '/j1.png', 
    description:"Entrepreneur and Business magnet",// Replace with path to your image
    twitterHandle: 'https://twitter.com/alicejohnson',
    linkedInHandle: 'https://linkedin.com/in/alicejohnson',
    instagramHandle: 'https://instagram.com/alicejohnson'
  },
  {
    name: 'Fonyuy Jude ',
    role: 'Chief Technical Officer',
    image: '/j1.png', // Replace with path to your image
    description:"Software Engineer and Computer Scientist",
    twitterHandle: 'https://twitter.com/bobsmith',
    linkedInHandle: 'https://linkedin.com/in/bobsmith',
    instagramHandle: 'https://instagram.com/bobsmith'
  },
  {
    name: 'Fien Dora',
    role: 'Lead Designer',
    image: '/j1.png', // Replace with path to your image
    twitterHandle: 'https://twitter.com/carolwilliams',
    linkedInHandle: 'https://linkedin.com/in/carolwilliams',
    instagramHandle: 'https://instagram.com/carolwilliams'
  },
  {
    name: 'Dave Brown',
    role: 'Marketing Director',
    image: '/j1.png', // Replace with path to your image
    twitterHandle: 'https://twitter.com/davebrown',
    linkedInHandle: 'https://linkedin.com/in/davebrown',
    instagramHandle: 'https://instagram.com/davebrown'
  }
];


const TeamSection = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            className="bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#535ab8e3] to-[#100735f8] shadow-2xl rounded-2xl p-6 "
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-col items-center">
              <Image src={member.image} alt={member.name} width={200} height={230} className="rounded-lg object-cover" />
              <h3 className="mt-4 font-bold text-[#f39741]">{member.name}</h3>
             
              <p className='text-sm text-[#f5f5f5] text-bold text-center my-2'>{member.description}</p>
              <div className="flex mt-4 space-x-3">
                <Link href={member.twitterHandle} target="_blank" className="text-blue-500 hover:text-blue-600" passHref>
              
                  <FaTwitter size={20}/>
                  
                  
                </Link>
                <Link href={member.linkedInHandle} target="_blank" className="text-blue-700 hover:text-blue-800" passHref>
                  
                    <FaLinkedinIn color='#fff' size={20} />
                  
                </Link>
                <Link href={member.instagramHandle} target="_blank" className="text-pink-500 hover:text-pink-600" passHref>
                
                    <FaInstagram size={20}/>
               
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TeamSection;
