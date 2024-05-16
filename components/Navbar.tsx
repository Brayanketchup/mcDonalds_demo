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

            <nav className=' lg:flex hidden sticky top-0 z-50 flex-col'>
                <div className='flex flex-col w-full items-center bg-white content-center z-20'>

                    <Link href={'/'}><Image src={'/main-logo-transparent.png'} width={60} height={60} alt='McDonalds Logo' /></Link>
                    <ul className='flex flex-row space-x-5'>
                        <button onClick={toggleOurMenu}>
                            <h4>Our Menu ↓</h4>
                        </button>
                        <li><Link href={'/'}>Home</Link></li>
                        <li><Link href={'/'}>rewards</Link></li>
                        <li><Link href={'/'}>about us</Link></li>
                    </ul>
                </div>
                {/* <div className={`  w-full p-4 ${showOurMenu ? 'flex' : 'hidden'}`}> */}
                <div>
                    <div className={`w-full p-4 absolute transition-all duration-300 bg-white ${showOurMenu ? 'translate-y-0' : '-translate-y-full'}`}>
                        <ul className='w-full grid grid-flow-col grid-rows-3'>
                            {menuCategories.map((category) => (
                                <li className='p-3' key={category.title}><Link href={category.url} className='flex flex-row'> <Image src={category.logo} height={60} width={60} alt='Categorie Logo' /> <h3>{category.title}</h3></Link></li>
                            ))}
                        </ul>
                    </div>
                </div>


            </nav>
            {/* <nav className=' lg:flex hidden sticky top-0 flex-col w-full items-center bg-white z-20'>
                <Link href={'/'}><Image src={'/main-logo-transparent.png'} width={60} height={60} alt='McDonalds Logo' /></Link>
                <ul className='flex flex-row space-x-3'>
                    <button onClick={toggleOurMenu}>
                        <h4>Our Menu ↓</h4>
                    </button>
                    <li><Link href={'/'}>Download App</Link></li>
                    <li><Link href={'/'}>MyMcDonald's Rewards</Link></li>
                    <li><Link href={'/'}> Exclusive Deals</Link></li>
                    <li><Link href={'/'}>About Our Food</Link></li>
                    <li><Link href={'/'}>Locate</Link></li>
                    <li><Link href={'/'}>Gift Cards</Link></li>
                </ul>
                <div className={`  w-full p-4 ${showOurMenu ? 'flex' : 'hidden'}`}>
                    <ul className='w-full grid grid-flow-col grid-rows-3'>
                        {menuCategories.map((categorie) => (
                            <li className='p-3' key={categorie.title}><Link href={categorie.url} className='flex flex-row'> <Image src={categorie.logo} height={60} width={60} alt='Categorie Logo' /> <h3>{categorie.title}</h3></Link></li>
                        ))}
                    </ul>
                </div>

            </nav> */}

            {/* mobile */}
            <nav className='lg: hidden w-full sticky top-0 z-20'>
                <div className='flex flex-row justify-between px-5 py-2 items-center z-30'>
                    <Link href={'/'}><Image src={'/main-logo-transparent.png'} width={60} height={60} alt='McDonalds Logo' /></Link>

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
                    <>
                        <ul className=' flex flex-col space-y-2'>
                            <li className='py-5'>
                                Our Menu
                                <ul className='w-full grid grid-flow-col md:grid-rows-3 grid-rows-5'>
                                    {menuCategories.map((category) => (
                                        <li className='p-3' key={category.title}><Link href={category.url} className='flex flex-row'> <Image src={category.logo} height={60} width={60} alt='Categorie Logo' /> <h3>{category.title}</h3></Link></li>
                                    ))}
                                </ul>
                            </li>
                            <li><div className=' content-none w-full h-[1px] bg-gray-500'></div></li>
                            <li><Link href={'/'}>Download App</Link></li>
                            <li><Link href={'/'}>MyMcDonald's Rewards</Link></li>
                            <li><Link href={'/'}> Exclusive Deals</Link></li>
                            <li><Link href={'/'}>About Our Food</Link></li>
                            <li><Link href={'/'}>Locate</Link></li>
                            <li><Link href={'/'}>Gift Cards</Link></li>
                        </ul>
                    </>
                </div>
            </nav>
        </>
    )
}
