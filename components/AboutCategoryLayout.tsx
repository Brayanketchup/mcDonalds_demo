import React from 'react'
import Image from 'next/image'

export const AboutCategoryLayout = ({imagelink, tittle, description} : { imagelink: string; tittle: string; description: string;
  }) => {
    return (
        <div className='flex flex-col w-full'>
            <h1 className='text-2xl pt-10'>{tittle}</h1>
            <Image src={imagelink} width={900} height={400} alt='about section image' className='w-full py-5' />
            <p className='text-sm text-slate-600 pb-10'>{description}</p>
        </div>
    )
}
