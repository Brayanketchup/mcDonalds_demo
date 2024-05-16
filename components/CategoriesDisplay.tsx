import React from 'react'
import { menuCategories } from '@/constants';
import Image from 'next/image';


export const CategoriesDisplay = () => {
  return (

    <>

      {/* // desktop */}
      <ul className='  md:flex flex-col hidden w-fit min-w-[260px] border-[#adadad] border-solid box-border border-2 rounded-lg p-5'>
        {menuCategories.map(category => (
          <li key={category.title} className='flex flex-row items-center space-x-2'>
            <Image src={category.logo} width={100} height={100} alt='caegory image' />
            <h3>{category.title}</h3>
          </li>
        ))}
      </ul>

      {/* //mobile */}
      {/* <ul className=' md:hidden grid grid-flow-row lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 space-x-5 space-y-3 w-full p-10 items-center justify-items-center '>


        {menuCategories.map(category => (

          <li key={category.title} className=' flex flex-col max-w-[200px] items-center text-center'>

            <Image src={category.logo} height={180} width={180} alt='Product Image' className=' '></Image>
            <h1 className=' text-wrap'>{category.title}</h1>

          </li>
        ))}

      </ul> */}
    </>
  )
}
