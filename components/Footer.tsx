

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { footerLinks, socials } from '@/constants';

export const Footer = () => {



    return (
        <footer className='w-full '>
            <div className='w-full flex md:flex-row flex-col justify-between flex-wrap px-20'>

                {footerLinks.map((link) => (
                    <div key={link.title} className='flex flex-col text-sm min-w-[170px] m-5'>
                        <h3 className='font-bold pb-4'>{link.title}</h3>
                        <div className="flex flex-col space-y-2">
                            {link.links.map((item) => (
                                <Link key={item.title}
                                    href={item.url}
                                >
                                    {item.title}
                                </Link>
                            ))}
                        </div>
                    </div>
                ))}


            </div>

            <div className='flex md:flex-row flex-col justify-between py-3 space-y-4 w-full items-center'>
                <div className='flex flex-row space-x-3'>
                    {socials.map((social) => (
                        <Link key={social.title}
                            href={social.url}> <Image src={social.logo} width={30} height={30} alt='social logo' /> </Link>

                    ))}
                </div>

                <div className='flex flex-row'>
                    <Link href={'/'} ><Image src={'/logos/google_play_badge.png'} width={150} height={40} alt='download store logo' /></Link>
                    <Link href={'/'} ><Image src={'/logos/app_store_badge.png'} width={150} height={40} alt='download store logo' /></Link>
                </div>

            </div>



        </footer>
    )
}
