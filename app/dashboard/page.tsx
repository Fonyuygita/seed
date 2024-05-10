import Image from 'next/image'
import React from 'react'

interface Props {
    
}

const page = (props: Props) => {
    return (
        <div className='w-screen h-screen flex flex-col items-center justify-center'>
            <Image src="/man.png" width={200} height={230} alt='man'/>
            <h1>Site On construction🤣</h1>
        </div>
    )
}

export default page
