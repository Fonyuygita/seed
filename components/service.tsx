"use client"

import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import { FaCode, FaDesktop, FaMobileAlt, FaExchangeAlt, FaLightbulb, FaUsers, FaChartLine, FaHandsHelping, FaServer } from 'react-icons/fa';
import Header from './header';



interface Service {
  title: string;
  description: string;
  icon:string | any;
}

const services: Service[] = [
 

  {
    title: 'Software Development',
    description: 'Our tech company specializes in creating innovative software solutions tailored to meet the specific needs of businesses and organizations, helping them streamline operations and achieve their goals.',
    icon: <FaCode color='white' className='text-3xl'/>
  },
  {
    title: 'Web Development',
    description: 'We offer professional web development services, crafting visually appealing and functional websites that provide seamless user experiences, driving engagement and conversions.',
    icon: <FaDesktop  color='white' className='text-3xl'/>
  },
  {
    title: 'Mobile App Development',
    description: 'Our team excels in developing mobile applications for iOS and Android platforms, empowering businesses to reach their audience on the go and enhance customer interactions.',
    icon: <FaMobileAlt color='white' className='text-3xl'/>
  },
  {
    title: 'Digital Transformation',
    description: 'We assist businesses in embracing digital transformation by leveraging cutting-edge technologies to optimize processes, increase efficiency, and drive growth.',
    icon: <FaExchangeAlt color='white' className='text-3xl' />
  },
  {
    title: 'Tech Consulting',
    description: 'Our experienced consultants provide strategic guidance and advice to businesses, helping them navigate the ever-changing tech landscape, identify opportunities, and make informed decisions.',
    icon: <FaLightbulb  color='white' className='text-3xl'/>
  },
  {
    title: 'Youth Empowerment Programs',
    description: 'We invest in the youth by offering training programs, internships, and mentorship opportunities, nurturing their skills and talents to become the future leaders and innovators in the tech industry.',
    icon: <FaUsers color='white' className='text-3xl'/>
  },
  {
    title: 'Social Impact Solutions',
    description: 'We leverage technology to address and solve societal problems, developing solutions that make a positive impact in areas such as education, healthcare, environmental sustainability, and more.',
    icon: <FaHandsHelping color='white' className='text-3xl'/>
  },
  {
    title: 'Data Analytics and Business Intelligence',
    description: 'Our data experts help businesses harness the power of data by providing analytics and business intelligence solutions, enabling informed decision-making and driving growth.',
    icon: <FaChartLine color='white' className='text-3xl'/>
  },
  {
    title: 'IT Support and Maintenance',
    description: 'We offer comprehensive IT support and maintenance services, ensuring the smooth operation of systems, networks, and software, maximizing uptime and minimizing disruptions for businesses.',
    icon: <FaServer color='white' className='text-3xl'/>
  },

];

const ServiceCard: React.FC<{ service: Service }> = ({ service }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 100 },
      }}
      transition={{ duration: 0.6 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className=" rounded-3xl p-6 flex items-center justify-center flex-col  border-b-2  bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#535ab8e3] to-[#100735f8]  border-b-[#ac690d]"
    >
      
       <div className="bg-orange-400 p-2 rounded-full mb-3 flex items-center justify-center">
      {service.icon}
      </div> 
      <h3 className="text-xl font-bold mx-auto mb-2 text-[#d5cece] text-center">{service.title}</h3>
      <p className='text-[#aaa7a3] text-sm p-3 text-center'>{service.description}</p>
    </motion.div>
  );
};

const ServicesSection: React.FC = () => {
  return (
    <section className="services-section mt-[29px] z-40   ">
     <Header title='What We DO?' description='SEED offers end-to-end services to guide you through every stage of your digital journey. From ideation and strategy to development, implementation, and ongoing support, our dedicated team of experts ensures a seamless experienc'/>
          
      <div className="services-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 items-center justify-center px-5 mt-8">
        {services.map((service, index) => (
          <ServiceCard key={index} service={service} />
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;