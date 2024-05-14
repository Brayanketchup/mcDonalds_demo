import React from 'react'
import { createClient } from 'contentful'
import { ProductFields } from '@/types';

 const getProducts = async () => {

    const client = createClient({
        space: process.env.CONTENTFUL_SPACE_ID!,
        accessToken: process.env.CONTENTFUL_ACCESS_KEY!
    });

    const res = await client.getEntries( { content_type: 'product'} )

    return res.items;

};
const products = getProducts();

export const page = ( ) => {
    console.log(products)
  return (
    <div>
        <div>Full Menu</div>
        
    </div>
  )
}
