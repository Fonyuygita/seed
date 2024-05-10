"use client"
import { auth, db } from '@/lib/firebaseConfig';
import upload from '@/lib/upload';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
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

interface AvatarState {
  file: File | null ;
  url: string;
}



const RegisterForm= () => {
  const [avatar, setAvatar] = useState<AvatarState>({
    file: null,
    url: "",
  });

  const [loading, setLoading]=useState(false)
const router=useRouter()
  
  const handleAvatar = (e:any) => {
    if (e.target.files[0]) {
      setAvatar({
        file: e.target.files[0],
        url: URL.createObjectURL(e.target.files[0]),
      });
    }
  };

//   function to take users input using their names to pass it to firebase db
const handleRegister=async(e:any)=>{
  


  e.preventDefault();
  setLoading(true)
  const formData=new FormData(e.target);
  const username = formData.get('username') as string;
const email = formData.get('email') as string;
const password = formData.get('password') as string;


  try {
      const res=await createUserWithEmailAndPassword(auth, email, password)
      const imgUrl=await upload(avatar.file)
      await setDoc(doc(db, "users", res.user.uid), {
          username,
          email,
          avatar:imgUrl,
          id:res.user.uid,
          // keep track of the block list
          blocked:[],
        });

      //   document to store user chats

  toast.success(`${username} your account has been created successfully`);

      router.push("/login")
  } catch (err:any) {
      console.log(err)
      toast.error(err.message)
      
      
  } finally{

      setLoading(false)
  }

  // if its successful or fails, we want to set loading to false

}

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
        <h2 className="text-lg font-bold mb-4">{'Register'}</h2>
        <form className="flex flex-col space-y-4" onSubmit={handleRegister}>
        <label htmlFor="file" className='cursor-pointer'>
            <Image src={avatar.url ||"/avatar.png"} width={30} height={30} alt="" className='rounded-full' />
            Upload image
          </label>
          <input
            type="file"
            id="file"
            style={{ display: "none" }}
            onChange={handleAvatar}
          />
            <input
              type="text"
              placeholder="Name"
              className="border p-2 rounded"
              name="username"
            />
        
          <input
            type="email"
            placeholder="Email"
            className="border p-2 rounded"
            name='email'
          />
          <input
            type="password"
            placeholder="Password"
            className="border p-2 rounded"
            name='password'
          />
          <button
            type="submit"
            className={`bg-radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#535ab8e3] to-[#100735f8] text-white p-2 rounded ${loading ? "text-black bg-blue-200": "bg-blue-500"} `}
            disabled={loading}
          >
            {loading ? "loading..." : "Register" }
          </button>
        </form>
        <Link href="/login">
        <button
         
          className="text-blue-500 mt-4"
        >
          {  'Have an account? Login'}
        </button>
        </Link>
      </div>
    </motion.div>
  );
};

export default RegisterForm;
