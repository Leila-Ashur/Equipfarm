// import { useState, useEffect } from 'react';
// import { BASE_URL } from '@/app/config';
// interface Order {
//   image: string;
//   customer_name: string;
//   equipment_name: string;
//   booking_date: string;
//   duration: string;
//   equipment_category: string;
//   id: number;
// }

// function useGetOrders() {
//   const [order, setOrders] = useState<Order[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<Error | null>(null);
//   useEffect(() => {
//     async function fetchorders() {
//       try {
//         const response = await fetch('https://0535-41-80-113-133.ngrok-free.app/api/Bookings');
//         const data = await response.json();

//         console.log("useGetOrders",{data})
//         console.log(response);
        
//         setOrders(data);
//         setLoading(false);
//       } catch (error) {
//         setError(error as Error);
//         setLoading(false);
//       }
//     }
//     fetchorders();
//   }, []);
//   return { order, loading, error };
// }
// export default useGetOrders;





import { useState, useEffect } from 'react';
import { getOrders } from '../utilities/utils';


export interface Order {
  image: string;
  customer_name: string;
  equipment_name: string;
  booking_date: string;
  duration: string;
  equipment_category: string;
  id: number;

}

const useGetProducts = () => {
  const [Orders, setProductData] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const OrderData = await getOrders();
        setProductData(OrderData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching Product data: ", error);
        setError(error instanceof Error ? error : new Error("An error occurred")); 
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return { Orders, loading, error };
};

export default useGetProducts;
























