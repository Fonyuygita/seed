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
    description: 'Description of service 1.',
    icon: '/img-1.png',
  },
  {
    title: 'Service 2',
    description: 'Description of service 2.',
    icon: 'img-2.png',
  },
  {
    title: 'Service 3',
    description: 'Description of service 3.',
    icon: 'heroImage.png',
  },

  {
    title: 'Service 1',
    description: 'Description of service 1.',
    icon: '/img-1.png',
  },
  {
    title: 'Service 2',
    description: 'Description of service 2.',
    icon: 'img-2.png',
  },
  {
    title: 'Service 3',
    description: 'Description of service 3.',
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
      className="service-card bg-transparent bg-opacity-40 backdrop-filter backdrop-blur-md backdrop-saturate-150 backdrop-opacity-70 rounded-lg p-4 flex items-center justify-center flex-col"
    >
      <div className="relative w-full h-[320px] mb-4">
        <Image
          src={service.icon}
          alt={service.title}
          layout="fill"
          objectFit="contain"
        />
      </div>
      <h3 className="text-xl font-bold mb-2">{service.title}</h3>
      <p>{service.description}</p>
    </motion.div>
  );
};

const ServicesSection: React.FC = () => {
  return (
    <section className="services-section mt-[16px] z-40 bg-[#eb941260]">
      <div className="services-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 items-center justify-center px-5">
        {services.map((service, index) => (
          <ServiceCard key={index} service={service} />
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;