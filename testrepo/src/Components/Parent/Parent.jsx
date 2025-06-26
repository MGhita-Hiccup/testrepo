// import React, { useState } from "react";
// import  Child  from "../Child/Child";

// export default function Parent() {
//   const [products, setProducts] = useState([
//     { nams: 'colder', ids: 14000, prices: 8000, COUNT: 5, OnSales: true },
//     { nams: 'sam', ids: 13000, prices: 4000, COUNT: 4, OnSales: false },
//     { nams: 'mob', ids: 15000, prices: 6000, COUNT: 3, OnSales: true },
//     { nams: 'iphon', ids: 19000, prices: 3000, COUNT: 2, OnSales: true },
//     { nams: 'iphon', ids: 10005, prices: 5000, COUNT: 9, OnSales: false },
//     { nams: 'iphon', ids: 20555, prices: 3000, COUNT: 1, OnSales: true },
//     { nams: 'iphon', ids: 22999, prices: 9000, COUNT: 8, OnSales: false },
//     { nams: 'iphon', ids: 88444, prices: 7000, COUNT: 7, OnSales: true },
//   ]);

//   const DeletProduct = (productIndex) => {
//     const newProducts = [...products];
//     newProducts.splice(productIndex, 1);
//     setProducts(newProducts);
//   };

//   const UbdateProduct = (productIndex) => {
//     const updatedProducts = [...products];
//     updatedProducts[productIndex].COUNT++;
//     setProducts(updatedProducts);
//   };

//   return (
//     <>
//       <div className="container bg-dark py-2">
//         <div className="row gy-2">
//           {products.map((hambozo, index) => (
//             <Child
//               key={index}
//               Update={UbdateProduct}
//               ProductIndex={index}
//               Delet={DeletProduct}
//               ProductArray={hambozo}
//             />
//           ))}
//         </div>
//       </div>
//     </>
//   );
// }
