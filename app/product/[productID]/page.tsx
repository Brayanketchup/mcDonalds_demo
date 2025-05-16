// 'use client'
import React from 'react'
import { fetchProductsByID } from '@/utils';
import Image from 'next/image';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Document } from '@contentful/rich-text-types';




interface PageProps {
    params: {
        productID: string;
    };
}




const Page = async ({ params }: PageProps) => {

    const { productID } = params;
    const products = await fetchProductsByID(productID);

    return (

        <>
            <h1>


                {products.map(product => (
                    <div key={product.sys.id}>
                        <div className='flex md:flex-row flex-col p-10 space-y-5'>
                            <div className='md:w-2/3 w-full'>
                            <Image src={'https:' + product.fields.thumbnail.fields.file.url} height={430} width={750} alt='Product Image' className='' />
                            </div>
                            <article className=' text-black text-wrap md:w-1/4 w-full space-y-4'>
                                <h1 className='text-5xl'>{product.fields.title}</h1>
                                <span className='text-xl'>{product.fields.calories} Cal.</span>
                                <p className=' text-md'>
                                    {documentToReactComponents(
                                        product.fields.description as Document
                                    )}
                                </p>

                            </article>
                        </div>

                    </div>

                ))}


            </h1>
        </>
    );
}

export default Page;

