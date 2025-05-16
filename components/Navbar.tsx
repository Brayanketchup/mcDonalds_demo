"use client";

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react';
import { menuCategories } from '@/constants';

export const Navbar = () => {


    const [showOurMenu, setshowOurMenu] = useState(false);
    const [isOpen, setIsOpen] = useState(false);


    const toggleOurMenu = () => setshowOurMenu(!showOurMenu);
    const toggleMenu = () => setIsOpen(!isOpen);

    const closeAllMenus = () => {
        setshowOurMenu(false);
        setIsOpen(false);
    }




    //function to close the menu in case of screen size change
    useEffect(() => {
        const checkScreenSize = () => {
            if (window.innerWidth > 1024) {
                setIsOpen(false); // Set isOpen to false if desktop
                console.log('should hide menu')
            }
            else if (window.innerWidth < 1024) {
                setshowOurMenu(false);
                console.log('should hide ourmenu')
            }
        };
        // if isOpen add the event listener
        if (isOpen || showOurMenu) {
            window.addEventListener('resize', checkScreenSize);
        }

        // Initially check if desktop
        checkScreenSize();

        return () => {
            window.removeEventListener('resize', checkScreenSize);
        };
    }, [isOpen, showOurMenu]); // use effect will run when isOpen change




    return (
        <>
            {/* desktop */}

            <nav className=' lg:flex hidden sticky top-0 z-50 flex-col shadow-md'>
                <div className='flex flex-col w-full items-center bg-white content-center z-20'>

                    <Link onClick={toggleMenu} href={'/'}><Image src={'/main-logo-transparent.png'} width={60} height={60} alt='McDonalds Logo' /></Link>
                    <ul className='flex flex-row space-x-5'>
                        <button onClick={toggleOurMenu}>
                            <h4>Our Menu ↓</h4>
                        </button>
                        <li><Link onClick={toggleMenu} href={'/'}>Home</Link></li>
                        <li><Link onClick={toggleMenu} href={'/about-our-food'}>about us</Link></li>
                    </ul>
                </div>
                <div>
                    <div className={`w-full p-4 absolute transition-all duration-300 bg-white ${showOurMenu ? 'translate-y-0' : '-translate-y-full'}`}>
                        <ul className='w-full grid grid-flow-col grid-rows-3'>
                            {menuCategories.map((category) => (
                                <li className='p-3' key={category.title}><Link href={category.url} onClick={() => { closeAllMenus() }} className='flex flex-row'> <Image src={category.logo} height={60} width={60} alt='Categorie Logo' /> <h3>{category.title}</h3></Link></li>
                            ))}
                        </ul>
                    </div>
                </div>


            </nav>

            {/* mobile */}
            <nav className='lg:hidden w-full sticky top-0 z-20'>
                <div className='flex flex-row justify-between px-5 py-2 items-center z-30'>
                    <Link onClick={toggleMenu} href={'/'}><Image src={'/main-logo-transparent.png'} width={60} height={60} alt='McDonalds Logo' /></Link>

                    <div className='flex flex-row space-x-2'>
                        <button className=' text-sm px-5 py-2 bg-primary-color-100 rounded-md'>
                            <h1><Link href={'/'}>Order Now</Link></h1>
                        </button>
                        <button onClick={toggleMenu} className='flex flex-col items-center space-y-[3px]'>
                            <div className={`content-none w-8 h-[5px] rounded-lg bg-yellow-500 transition-transform   ${isOpen ? 'rotate-45 translate-y-3' : ''}`}></div>
                            <div className={`content-none w-7 h-[5px] rounded-lg bg-green-500 transition-opacity  ${isOpen ? 'opacity-0' : ''}`}></div>
                            <div className={`content-none w-7 h-[5px] rounded-lg bg-amber-800 transition-opacity ${isOpen ? 'opacity-0' : ''}`}></div>
                            <div className={`content-none w-8 h-[5px] rounded-lg bg-yellow-500 transition-transform  ${isOpen ? '-rotate-45 -translate-y-3  ' : ''}`}></div>
                        </button>
                    </div>
                </div>
                <div className={` absolute top-0 w-screen h-screen transition-transform duration-300 -z-10 bg-white flex items-center p-10   ${isOpen ? 'translate-x-0 ' : 'translate-x-full'}`}>
                    <div className='pt-10'>
                        <ul className=' flex flex-col space-y-2'>
                            <li className='py-5'>
                                <h1 className='text-2xl'>
                                Menu Categories
                                </h1>
                                <ul className='w-full grid grid-flow-col md:grid-rows-3 grid-rows-5'>
                                    {menuCategories.map((category) => (
                                        <li className='p-3' key={category.title}><Link onClick={() => { closeAllMenus() }} href={category.url} className='flex flex-row'> <Image src={category.logo} height={60} width={60} alt='Categorie Logo' /> <h3>{category.title}</h3></Link></li>
                                    ))}
                                </ul>
                            </li>
                            <li><div className=' content-none w-full h-[1px] bg-gray-500'></div></li>
                            <li><Link onClick={toggleMenu} href={'/'}>Home</Link></li>
                            <li><Link onClick={toggleMenu} href={'/about-our-food'}>about us</Link></li>
                            <li><Link onClick={toggleMenu} href={'/full-menu'}>Open Full Menu</Link></li>
                            <li><Link onClick={toggleMenu} href={'/'}>Download App</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
