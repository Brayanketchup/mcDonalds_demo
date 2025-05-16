'use client'
import React from 'react'
import { menuCategories } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';


interface PageProps {
  aditionalPath?: string;

}

export const CategoriesDisplay = ( { aditionalPath } : PageProps ) => {

  const pathname = usePathname();

  return (

    <>

      {/* // desktop */}
      <ul className='  md:flex flex-col hidden w-fit min-w-[260px] border-[#adadad] border-solid box-border border-2 rounded-lg p-5'>
        {menuCategories.map(category => (
          <li key={category.title} className='flex flex-row items-center space-x-2'>

            <Link href={category.url}>
              <Image src={category.logo} width={100} height={100} alt='caegory image' />
              <h3>{category.title}</h3>
            </Link>
          </li>
        ))}
      </ul>

      {/* //mobile */}
      <ul className=' md:hidden grid grid-flow-row lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 space-x-5 space-y-3 w-full p-10 items-center justify-items-center '>


        {menuCategories.map(category => (

          <li key={category.title} className=' flex flex-col max-w-[200px] items-center text-center'>
            <Link href={category.url}>
              <Image src={category.logo} width={180} height={180} alt='category image' />
              <h3>{category.title}</h3>
            </Link>

          </li>
        ))}

      </ul>
    </>
  )
}
