// "use client";
// import Button from "@/components/Button";
// import LoaderPage from "@/components/Loader";
// import { ProductsProps } from "@/type/dataType";
// import Image from "next/image";
// import { useEffect, useState } from "react";

// export default function Home() {
//   const [products, setProducts] = useState<ProductsProps[]>([]);
//   const [offset, setOffset] = useState<number>(0);
//   const fetchData = async () => {
//     const response = await fetch(
//       `https://api.escuelajs.co/api/v1/products?offset=${offset}&limit=12`
//     );
//     const data = await response.json();
//     // console.log('Products Data', data.length)
//     console.log("Products Data", data);
//     if (data.length) {
//       setProducts(data);
//     }
//   };
//   useEffect(() => {
//     fetchData();
//   }, [offset]);

//   const handleNext = () => {
//     setOffset((pre) => pre + 12);
//   };
//   const handlePrevious = () => {
//     setOffset((pre) => pre - 12);
//   };
//   if (!products.length) {
//     return <LoaderPage />;
//   }
//   return (
//     <>
//       <div className="w-full h-screen  p-12">
//         <div className="flex flex-col">
//           <div className="  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-4 ">
//             {products?.map((product) => (
//               <>
//                 <article
//                   className="max-w-sm w-full  rounded-lg shadow-lg overflow-hidden  transition-all ease-in-out duration-500 hover:scale-105"
//                   key={product.id}
//                 >
//                   <Image
//                     // src={product.images[1]}
//                     src="https://i.imgur.com/FDwQgLy.jpeg"
//                     width={500}
//                     height={500}
//                     alt="Picture of the author"
//                     className="object-cover h-auto w-full"
//                   />
//                   <div className="flex flex-col gap-1 my-4 px-4">
//                     <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-50">
//                       {product.title}
//                     </h2>
//                     <span className="font-semibold text-gray-800 dark:text-gray-50">
//                       ${product.price}
//                     </span>
//                   </div>
//                 </article>
//               </>
//             ))}
//           </div>
//           <div className="flex justify-center items-center !my-12 space-x-4">
//             <Button
//               label="Previous"
//               onClick={handlePrevious}
//               disabled={offset === 0}
//             />
//             <Button
//               label="Next"
//               onClick={handleNext}
//               disabled={products.length < 12}
//             />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

import React from "react";
import Products from "./products/page";

const Page = () => {
  return (
    <>
      <Products />
    </>
  );
};

export default Page;
