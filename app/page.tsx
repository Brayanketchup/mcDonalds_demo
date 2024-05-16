import Image from "next/image";
import { InfoBox, Hero } from '@/components';

export default function Home() {
  return (
    <main className="bg-pattern-bg">
      <Hero/>
      <InfoBox/>
    </main>
  );
}


// type ProductSkeleton = {
//   contentTypeId: "product";
//   fields: {
//     title: EntryFieldTypes.Text;
//     category: EntryFieldTypes.Text;
//     calories: EntryFieldTypes.Integer;
//     description: EntryFieldTypes.RichText;
//     thumbnail: EntryFieldTypes.Symbol;
//     protein: EntryFieldTypes.Text;
//     totalCarbs: EntryFieldTypes.Text;
//     totalFat: EntryFieldTypes.Text;
//     saturatedFat: EntryFieldTypes.Text;
//     transFat: EntryFieldTypes.Text;
//     cholesterol: EntryFieldTypes.Text;
//     dietaryFiber: EntryFieldTypes.Text;
//     totalSugars: EntryFieldTypes.Text;
//     addedSugars: EntryFieldTypes.Text;
//     vitaminD: EntryFieldTypes.Text;
//     calcium: EntryFieldTypes.Text;
//     iron: EntryFieldTypes.Text;
//     potassium: EntryFieldTypes.Text;
//     sodium: EntryFieldTypes.Text;
//     ingredients: EntryFieldTypes.Object;
//     allergenInformation: EntryFieldTypes.RichText;
//     size: EntryFieldTypes.Text;
//     slung: EntryFieldTypes.Text;

//       }

// };



// // Fetch data from Contentful
// const fetchIngredients = async () => {
//   const client = createClient({
//     space: '769v6chai5nq',
//     accessToken: 'l7c-ihVysv-xBFcYyXQ0lkjnaIHh_nis6sMdqEp5V9Y'
//   });

//   const res = await client.getEntries<ProductSkeleton>({
//     content_type: 'product'
//   });

//   return res.items;
// };

// export default async function Home() {
//   const products = await fetchIngredients();

//   console.log('produtcs are ', products);


//   return (
//     <main className="bg-pattern-bg">

//       <div className=' h-screen w-full bg-gray-500'>

//         {/* { tests.map(test => ( <div className=' text-black text-lg font-extrabold'>{test.fields.thetest}</div> )) } */}
//         {products.map(product => (<div className=' text-black text-lg font-extrabold'>
//           <div key={product.sys.id}>
//             <h1>
//               {product.fields.title}
//             </h1>
//             {/* <Image src={'https:' + product.fields.thumbnail.fields.file.url } width={180} height={180} alt=''/> */}
//           </div>

//         </div>))}


//       </div>
//       <Hero />
//       <InfoBox />
//     </main>
//   );
// }

/////////////////// second working example ////////////////////
// type TestingSkeleton = {
//   contentTypeId: "ingredient";
//   fields: {
//     title: EntryFieldTypes.Text;
//     thumbnail: EntryFieldTypes.Symbol
//       }

// };



// // Fetch data from Contentful
// const fetchIngredients = async () => {
//   const client = createClient({
//     space: '769v6chai5nq',
//     accessToken: 'l7c-ihVysv-xBFcYyXQ0lkjnaIHh_nis6sMdqEp5V9Y'
//   });

//   const res = await client.getEntries<TestingSkeleton>({
//     content_type: 'ingredient'
//   });

//   return res.items;
// };

// export default async function Home() {
//   const ingredients = await fetchIngredients();

//   // console.log('ingredients are ', ingredients);


//   return (
//     <main className="bg-pattern-bg">

//       <div className=' h-screen w-full bg-gray-500'>

//         {/* { tests.map(test => ( <div className=' text-black text-lg font-extrabold'>{test.fields.thetest}</div> )) } */}
//         {ingredients.map(ingredient => (<div className=' text-black text-lg font-extrabold'>
//           <div key={ingredient.sys.id}>
//             <h1>
//               {ingredient.fields.title}
//             </h1>
//             <Image src={'https:' + ingredient.fields.thumbnail.fields.file.url } width={180} height={180} alt=''/>
//           </div>

//         </div>))}


//       </div>
//       <Hero />
//       <InfoBox />
//     </main>
//   );
// }

/////////////// example connection below ///////////////////////



// type TestingSkeleton = {
//   contentTypeId: "testing";
//   fields: {
//     thetest: EntryFieldTypes.Text;
//   };
// };

// // Fetch data from Contentful
// const fetchIngredients = async () => {
//   const client = createClient({
//     space: '769v6chai5nq',
//     accessToken: 'l7c-ihVysv-xBFcYyXQ0lkjnaIHh_nis6sMdqEp5V9Y'
//   });

//   const res = await client.getEntries<TestingSkeleton>({
//     content_type: 'testing'
//   });

//   return res.items;
// };

// export default async function Home() {
//   const tests = await fetchIngredients();
//   console.log('ingredients are ', tests);


//   return (
//     <main className="bg-pattern-bg">

//       <div className=' h-screen w-full bg-gray-500'>

//         { tests.map(test => ( <div className=' text-black text-lg font-extrabold'>{test.fields.thetest}</div> )) }


//       </div>
//       <Hero />
//       <InfoBox />
//     </main>
//   );
// }
