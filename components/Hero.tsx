import React from 'react'
import Image from 'next/image'

export const Hero = () => {
  return (
    <section className='w-full h-full'>
        <div className=' w-full h-full py-32 relative bg-primary-color bg-hero-bg bg-no-repeat bg-right-bottom flex justify-center items-center flex-col pt-14 '>
            <div className='w-1/2 p-5'>
                <h1 className='text-4xl md:text-5xl lg:text-6xl'>Bite Into <span className='text-secondary-color'>Happiness</span> Witch Every Mouthful</h1>
                <p className=' text-xl md:text-3xl lg:text-4xl font-extrabold' >Juicier patties, new toastier buns and meltier cheese. The classics are now a little more ‘Mmmm’.</p>
                <button className='w-fit p-4 rounded-md text-sm text-black bg-[#ffbc0d]' >Order Now</button>    
            </div>
            <div className='w-full absolute bottom-0'> <Image src={'/overlay.svg'} width={1} height={1} alt='' className='w-full '/></div>
        </div>
        </section>
  )
}
