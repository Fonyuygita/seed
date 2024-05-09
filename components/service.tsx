"use client"

import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

interface Service {
  title: string;
  description: string;
  icon: string;
}

const services: Service[] = [
  {
    title: 'Service 1',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium voluptatem molestias excepturi. Porro delectus officia tenetur doloremque. Quo eius porro aliquid maiores dolores reiciendis dolor, maxime illum illo provident repudiandae, doloribus laborum? Iusto, sint.',
    icon: '/img-1.png',
  },
  {
    title: 'Service 2',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium voluptatem molestias excepturi. Porro delectus officia tenetur doloremque. Quo eius porro aliquid maiores dolores reiciendis dolor, maxime illum illo provident repudiandae, doloribus laborum? Iusto, sint.',
    icon: 'img-2.png',
  },
  {
    title: 'Service 3',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium voluptatem molestias excepturi. Porro delectus officia tenetur doloremque. Quo eius porro aliquid maiores dolores reiciendis dolor, maxime illum illo provident repudiandae, doloribus laborum? Iusto, sint.',
    icon: 'heroImage.png',
  },

  {
    title: 'Service 1',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium voluptatem molestias excepturi. Porro delectus officia tenetur doloremque. Quo eius porro aliquid maiores dolores reiciendis dolor, maxime illum illo provident repudiandae, doloribus laborum? Iusto, sint.',
    icon: '/img-1.png',
  },
  {
    title: 'Service 2',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium voluptatem molestias excepturi. Porro delectus officia tenetur doloremque. Quo eius porro aliquid maiores dolores reiciendis dolor, maxime illum illo provident repudiandae, doloribus laborum? Iusto, sint.',
    icon: 'img-2.png',
  },
  {
    title: 'Service 3',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium voluptatem molestias excepturi. Porro delectus officia tenetur doloremque. Quo eius porro aliquid maiores dolores reiciendis dolor, maxime illum illo provident repudiandae, doloribus laborum? Iusto, sint.',
    icon: 'heroImage.png',
  },
  // Add more services as needed
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
      className=" rounded-lg p-6 flex items-center justify-center flex-col  border-b-2  bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#535ab8e3] to-[#100735f8]  border-b-[#ac690d]"
    >
      
       <div className="relative w-full h-[120px] mb-1">
        <Image
          src={service.icon}
          alt={service.title}
          layout="fill"
          objectFit="contain"
        />
      </div> 
      <h3 className="text-xl font-bold mx-auto text-black">{service.title}</h3>
      <p className='text-[#160707] text-sm'>{service.description}</p>
    </motion.div>
  );
};

const ServicesSection: React.FC = () => {
  return (
    <section className="services-section mt-[19px] z-40  ">
          <h2 className="text-2xl lg:text-5xl font-bold mb-4 text-black text-bold my-4 text-center">What We Do</h2>
<p className='text-center w-[90%] md:w-[30%] mx-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam et, voluptatum tempora iusto earum distinctio dolorem facilis </p>
      <div className="services-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 items-center justify-center px-5 mt-8">
        {services.map((service, index) => (
          <ServiceCard key={index} service={service} />
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;