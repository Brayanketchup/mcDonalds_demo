// 'use client'
import React from 'react';
import { fetchProductsByCategory } from '@/utils';
import { createClient } from 'contentful';
// import { ProductSkeleton } from '@/types';
import { CategoriesDisplay } from '@/components'
import Image from 'next/image';
import Link from 'next/link';

interface PageProps {
    params: {
        category: string;
    };
}


// Beverages

const Page = async ({ params }: PageProps) => {
    const { category } = params;
    const products = await fetchProductsByCategory(category);
    
    return (
        <section>
            <h1 className='text-4xl md:text-5xl lg:text-6xl w-full text-center py-5'>Page for {category}</h1>
            <div className='flex flex-row p-5'>
                <div className='md:w-1/3 w-full md:flex  justify-center h-fit'>
                    <CategoriesDisplay 
                    aditionalPath={'full-menu'}
                    />
                </div>

                <div className='w-full'>

                    <ul className='grid grid-flow-row lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 space-x-5 space-y-3 w-full p-10 items-center justify-items-center'>
                        {products.map(product => (

                            <li key={product.sys.id} className=' flex flex-col max-w-[350px] items-center text-center'>

                                <Link href={'/product/' + product.fields.slug}>
                                <Image src={'https:' + product.fields.thumbnail.fields.file.url} height={200} width={350} alt='Product Image' className=' '></Image>
                                <h1 className=' text-wrap'>{product.fields.title}</h1>
                                </Link>

                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Page;