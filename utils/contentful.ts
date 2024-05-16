

import { EntryFieldTypes, createClient } from 'contentful';
import { ProductSkeleton } from '@/types'


const client = createClient({
  space: '769v6chai5nq',
  accessToken: 'l7c-ihVysv-xBFcYyXQ0lkjnaIHh_nis6sMdqEp5V9Y'
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
