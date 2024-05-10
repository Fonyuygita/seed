"use client"
import { auth } from '@/lib/firebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';
// pages/index.tsx in Next.js
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { toast } from 'react-toastify';


const containerVariants = {
  hidden: { y: '-100vh' },
  visible: { y: 0, transition: { type: 'spring', stiffness: 120 } },
};

const LoginPage= () => {
  const [loading, setLoading]=useState(false)
const router=useRouter()
 
  const handleLogin = async(e:any) => {
    e.preventDefault();
    setLoading(true);
    const formData=new FormData(e.target);
    const email = formData.get('email') as string;
const password = formData.get('password') as string;

    try {
        
        await signInWithEmailAndPassword(auth, email, password)
    toast.success("Sign in successfully");
    router.push("/dashboard")

    } catch (err:any) {
        toast.error("Something went wrong")
    }finally{
        setLoading(false)
    }
  };


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
        <h2 className="text-lg font-bold mb-4">{'login'}</h2>
        <form className="flex flex-col space-y-4" onSubmit={handleLogin}>
          
           
        
          <input
            type="email"
            placeholder="Email"
            className="border p-2 rounded"
            name="email"
          />
          <input
            type="password"
            placeholder="Password"
            className="border p-2 rounded"
            name="password"
          />
          <button
            type="submit"
            className={`bg-radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#535ab8e3] to-[#100735f8] text-white p-2 rounded ${loading ? "text-black bg-blue-200": "bg-blue-500"} `}
            disabled={loading}
          >
            {loading ? "loading..." : "Login" }
          </button>
        </form>
        <Link href="/register">
        <button
         
          className="text-blue-500 mt-4"
        >
          {  'Have an account? Register'}
        </button>
        </Link>
      </div>
    </motion.div>
  );
};

export default LoginPage;
