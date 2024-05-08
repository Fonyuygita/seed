import LoginPage from '@/components/auth/login-form'
import React from 'react'

interface Props {
    
}

const page = (props: Props) => {
    return (
        <div className="w-full h-[100vh] mt-9 flex flex-col items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-800">

          <LoginPage/> 
        </div>
    )
}

export default page
