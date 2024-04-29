"use client";

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react';
import { shortMenu } from '@/constants';

export const Navbar = () => {


    const [showOurMenu, setshowOurMenu] = useState(false);
    const toggleMenu = () => setshowOurMenu(!showOurMenu) ;



  return (
    <>
    {/* desktop */}
    <nav className=' lg:flex hidden flex-row w-full items-center shadow-sm shadow-black'>
        <Link href={'/'}><Image src={'/main-logo.jpg'} width={115} height={115} alt='McDonalds Logo'/></Link>
        <ul className='flex flex-row space-x-3'>
            <button onClick={toggleMenu}>
                <h4>Our Menu ↓</h4>
            </button>
            <li><Link href={'/'}>Download App</Link></li>
            <li><Link href={'/'}>MyMcDonald's Rewards</Link></li>
            <li><Link href={'/'}> Exclusive Deals</Link></li>
            <li><Link href={'/'}>About Our Food</Link></li>
            <li><Link href={'/'}>Locate</Link></li>
            <li><Link href={'/'}>Gift Cards</Link></li>
        </ul>
    </nav>
        <div className={`  w-full p-4 ${showOurMenu?  'flex':'hidden'}`}>
            <ul className='w-full grid grid-flow-col grid-rows-3'>
            {shortMenu.map((categorie) => (
                <li className='p-3' key={categorie.title}><Link href={categorie.url} className='flex flex-row'> <Image src={categorie.logo} height={60} width={60} alt='Categorie Logo'/> <h3>{categorie.title}</h3></Link></li>
            ))}
            </ul>
        </div>
    
    
    </>
  )
}
