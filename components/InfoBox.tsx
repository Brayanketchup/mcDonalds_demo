import React from 'react'
import Image from 'next/image'
import { home } from '@/constants'


export const InfoBox = () => {
    return (
        <section className=' '>
            {home.map((item) => (
                <div key={item.tittle} className=' w-full py-20 flex justify-center '>
                    <div className='flex lg:flex-row flex-col max-w-[1200px] space-x-4 '>
                        <Image src={item.imageLink} width={750} height={50} alt='info icon' className=' object-contain lg:w-2/3 w-full rounded-md' />
                        <div className=' flex flex-col space-y-5 p-2'>
                            <h1 className=' md:text-3xl sm:text-2xl text-xl font-extrabold'>{item.tittle}</h1>
                            <p className='sm:text-sm text-lg ' >{item.info}</p>
                            <span className='text-[10px]'>{item.disclaimer}</span>
                            <a href={item.buttonLink} className=' w-fit p-4 rounded-md text-sm text-black bg-[#ffbc0d]'>{item.buttonText}</a>
                        </div>
                    </div> 
                </div>

            ))}

        </section>

    )
}
