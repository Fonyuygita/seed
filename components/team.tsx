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
  twitterHandle: string;
  linkedInHandle: string;
  instagramHandle: string;
};

// Sample data for team members
const teamMembers: TeamMember[] = [
  {
    name: 'Alice Johnson',
    role: 'CEO',
    image: '/j1.png', // Replace with path to your image
    twitterHandle: 'https://twitter.com/alicejohnson',
    linkedInHandle: 'https://linkedin.com/in/alicejohnson',
    instagramHandle: 'https://instagram.com/alicejohnson'
  },
  {
    name: 'Bob Smith',
    role: 'CTO',
    image: '/j1.png', // Replace with path to your image
    twitterHandle: 'https://twitter.com/bobsmith',
    linkedInHandle: 'https://linkedin.com/in/bobsmith',
    instagramHandle: 'https://instagram.com/bobsmith'
  },
  {
    name: 'Carol Williams',
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            className="bg-white shadow-lg rounded-lg p-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-col items-center">
              <Image src={member.image} alt={member.name} width={100} height={100} className="rounded-full" />
              <h3 className="mt-4 font-bold">{member.name}</h3>
              <p className="text-sm text-gray-600">{member.role}</p>
              <div className="flex mt-4 space-x-3">
                <Link href={member.twitterHandle} target="_blank" className="text-blue-500 hover:text-blue-600" passHref>
              
                  <FaTwitter />
                  
                  
                </Link>
                <Link href={member.linkedInHandle} target="_blank" className="text-blue-700 hover:text-blue-800" passHref>
                  
                    <FaLinkedinIn />
                  
                </Link>
                <Link href={member.instagramHandle} target="_blank" className="text-pink-500 hover:text-pink-600" passHref>
                
                    <FaInstagram />
               
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
