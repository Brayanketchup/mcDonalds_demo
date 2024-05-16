// 'use client'

import { fetchProducts } from '@/utils'
import Image from 'next/image';
import { menuCategories } from '@/constants';
import { CategoriesDisplay } from '@/components'



export default async function Home() {
  const products = await fetchProducts();


  // console.log('produtcs are ', products);


  return (
    <section className=' w-full py-5 px-2 '>
      <h1 className='text-4xl md:text-5xl lg:text-6xl w-full text-center py-5'>McDonald's Menu</h1>


      <div className='flex md:flex-row flex-col'>

        <div className='md:w-1/3 flex justify-center h-fit ' >
          <CategoriesDisplay />

        </div>

        <div>


          {menuCategories.map(category => {
            const filteredProducts = products.filter(product => product.fields.category === category.title);

            if (filteredProducts.length === 0) return null; // if not products for that category skip it

            return (



              <div key={category.title}>

                <h1 className='text-2xl w-full text-center'>{category.title}</h1>
                <ul className=' grid grid-flow-row lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 space-x-5 space-y-3 w-full p-10 items-center justify-items-center '>


                  {filteredProducts.map(product => (

                    <li key={product.sys.id} className=' flex flex-col max-w-[200px] items-center text-center'>

                      <Image src={'https:' + product.fields.thumbnail.fields.file.url} height={180} width={180} alt='Product Image' className=' '></Image>
                      <h1 className=' text-wrap'>{product.fields.title}</h1>

                    </li>
                  ))}

                </ul>

              </div>

            );
          })}
        </div>
      </div>
    </section>
  );
}

//   return (
//     <main className="bg-pattern-bg">
//       <section className=' h-screen w-full bg-gray-500'>


//         <h1 className='text-4xl md:text-5xl lg:text-6xl'>McDonalds's Menu</h1>


//         {menuCategories.map(categorie => (
//           <>
//           <h1 className=' text-2xl'>{categorie.title}</h1>
//             {products.map(product => product.fields.category === categorie.title ? (
//               <div key={product.sys.id}>
//                 <h1>{product.fields.title}</h1>

//               </div>

//             ) : '')}
//           </>

//         ))}








//       </section>


//     </main>
//   );
// }