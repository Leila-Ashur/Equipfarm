

import {BASE_URL} from "@/app/config"

export async function GET() {
  console.log(BASE_URL);
  
  try {
    if (!BASE_URL) {
      return new Response("BASE URL not found", {
        status: 404,
        statusText: "Failed",
      });
    }
    const response = await fetch(`${BASE_URL}/api/catalogue/`);
    if (!response.ok) {
      return new Response("Failed to fetch products", {
        status: 500,
        statusText: "Failed",
      });
    }
    const result = await response.json();
    return new Response(JSON.stringify(result), {
      status: 200,
      statusText: "Success",
    });
  } catch (error: any) {
    console.log({error});
    
    return new Response(error.message, {
      status: 500,
      statusText: "Failed",
    });
  }
}


























































// import {BASE_URL} from "@/app/config"
// export async function GET() {
//   try {
//     if (!BASE_URL) {
//       return new Response("BASE URL not found", {
//         status: 404,
//         statusText: "Failed",
//       });
//     }
//     const response = await fetch(`${BASE_URL}/api/catalogue/`);
//     if (!response.ok) {
//       return new Response("Failed to fetch products", {
//         status: 500,
//         statusText: "Failed",
//       });import { useState, useEffect } from 'react';
//       import { BASE_URL} from '@/app/config';
//       export interface Product {
//         id: number;
//         equipment_name: string;
//         price: number;
//         description: string;
//         image: string;
//         is_available: boolean;
//         category: number;
//         rating?:number|5
//       }
      
//       function useGetProducts() {
//         const [products, setProducts] = useState<Product[]>([]);
//         const [loading, setLoading] = useState(true);
//         const [error, setError] = useState<Error | null>(null);
//         useEffect(() => {
//           async function fetchProducts() {
//             try {
//               const response = await fetch(`${BASE_URL}/api/catalogue/`);
//               const data = await response.json();
//               console.log({data})
//               setProducts(data);
//               setLoading(false);
//             } catch (error) {
//               setError(error as Error);
//               setLoading(false);
//             }
//           }
//           fetchProducts();
//         }, []);
//         return { products, loading, error };
//       }
//       export default useGetProducts;









      
      
      
      
      
      
      
      
      
      
      
      
      
//     }
//     const result = await response.json();
//     return new Response(JSON.stringify(result), {
//       status: 200,
//       statusText: "Success",
//     });
//   } catch (error: any) {
//     return new Response(error.message, {
//       status: 500,
//       statusText: "Failed",
//     });
//   }
// }