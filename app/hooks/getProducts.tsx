import { getProducts } from "../utilities/utils";
import { useEffect, useState } from "react";

export interface Product {
  id: number;
  equipment_name: string;
  price: number;
  description: string;
  image: string;
  is_available: boolean;
  category: number;
  rating?: number | 5;
}

const useGetProducts = () => {
  const [ProductData, setProductData] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const products = await getProducts();
        setProductData(products);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching Product data: ", error);
        setError(error instanceof Error ? error : new Error("An error occurred")); 
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return { ProductData, loading, error };
};

export default useGetProducts;
