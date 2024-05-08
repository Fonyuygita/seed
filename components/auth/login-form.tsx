"use client"
// pages/index.tsx in Next.js
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';


const containerVariants = {
  hidden: { y: '-100vh' },
  visible: { y: 0, transition: { type: 'spring', stiffness: 120 } },
};

const LoginPage = () => {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex flex-col items-center justify-center min-h-screen "
    >
      <div className="bg-white p-6 rounded shadow-md">
        <div className="flex items-center justify-center bg-black p-2 w-14 h-14 rounded-full">
      <Image src="/seed.png" alt="Company Logo" width={40} height={40}   />
      </div>
        <h2 className="text-lg font-bold mb-4">{isLogin ? 'Login' : 'Register'}</h2>
        <form className="flex flex-col space-y-4">
          {!isLogin && (
            <input
              type="text"
              placeholder="Name"
              className="border p-2 rounded"
            />
          )}
          <input
            type="email"
            placeholder="Email"
            className="border p-2 rounded"
          />
          <input
            type="password"
            placeholder="Password"
            className="border p-2 rounded"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded"
          >
            {isLogin ? 'Login' : 'Register'}
          </button>
        </form>
        <button
          onClick={() => setIsLogin(!isLogin)}
          className="text-blue-500 mt-4"
        >
          {isLogin ? 'Need an account? Register' : 'Have an account? Login'}
        </button>
      </div>
    </motion.div>
  );
};

export default LoginPage;
