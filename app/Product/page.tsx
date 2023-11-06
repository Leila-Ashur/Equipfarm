'use client'
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Header from '../Navbar/page';
import Farm from '../Components/Farm/page';
import CategorySection from '../Homepage/categorySection';
import useGetProducts from '../hooks/getProducts';

type CategoryType = "poultry" | "farm" | "dairy";

export interface TProduct {
  id: number;
  equipment_name: string;
  price: number;
  description: string;
  image: string;
  is_available: boolean;
  category: number;
  rating?: number | 5;
}

const ProductsPage = ({ product }: { product: TProduct }) => (
  <div className="bg-white rounded-lg overflow-hidden p-4 max-w-xs shadow-md hover:shadow-lg border border-gray-700 mb-4 mx-2 flex flex-col">
    <div className="mb-2">
      <img src={product.image} alt="Product" className="w-full" />
    </div>
    <div className="text-yellow-400 ml-20">
    </div>
    <div className="text-center">
      <h3 className="text-xl font-semibold">{product.equipment_name}</h3>
      <p className="text-gray-600">{product.price}</p>
      <p
        className={`text-${product.is_available ? 'green' : 'red'}-500 font-semibold`}
      >
        {product.is_available ? "available" : "Out of Stock"}
      </p>
      <div className="flex items-center justify-center mt-2">
        <button className="bg-yellow-500 text-white font-semibold py-2 px-4 rounded-full ml-2 hover:bg-green-600 transition duration-300">
          <Link href={`/products/${product.id}`}>View More</Link>
        </button>
      </div>
    </div>
  </div>
);

const ProductList = () => {
  const [activeCategory, setActiveCategory] = useState<CategoryType>("poultry");
  const { ProductData, loading } = useGetProducts();

  if (loading) {
    return <div>Loading...</div>;
  }


  const productList = Array.isArray(ProductData) ? ProductData : [ProductData];

  return (
    <div>
      <Header />
      <Link scroll href="/dashboardsignup" className="underline underline-offset-4 text-blue-500">
        Sell Here
      </Link>
      <Farm />
      <CategorySection activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
      <div className="flex flex-wrap mx-10 my-2 gap-10">
        {productList.slice(0, 5).map((product, index) => (
          <ProductsPage key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
