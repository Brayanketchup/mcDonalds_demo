

import { EntryFieldTypes, createClient } from 'contentful';
import { ProductSkeleton } from '@/types'

const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID, 
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN
});


export const fetchProducts = async () => {
 
  const res = await client.getEntries<ProductSkeleton>({
    content_type: 'product'
  });

  return res.items;
};



export const fetchProductsByCategory = async (category: string) => {
  const res = await client.getEntries<ProductSkeleton>({

    content_type: 'product',
    'fields.category': category
  })

  return res.items

}

export const fetchProductsByID = async (id: string) => {
  const res = await client.getEntries<ProductSkeleton>({

      content_type: 'product',
      'fields.slug': id
  })

  return res.items

}
