"use client";
import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import Link from "next/link";
import Products from "../Data/data";
import Navbar from "../Navbar/page";
import { useState } from "react";
import useGetProducts,{Product} from "../hooks/getProducts";
// import useGetProducts, { Product } from "../Hooks/getProducts";
const HomePage = () => {
  const { ProductData, loading } = useGetProducts();
  console.log("products",ProductData)
  const [filteredData, setFilteredData] = useState<Product[]>([]);
  const handleSearch = (query: string) => {
    const filteredResults: any = Products?.filter((item: any) =>
      item.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredData(filteredResults);
  };
  useEffect(() => {
    return setFilteredData(ProductData);
  }, [ProductData]);
  return (
    <>
      <Navbar onSearch={handleSearch} />
      <div
        className=" mt-20 max-w-8xl mx-4 md:mx-10 "
        style={{ paddingTop: "5%" }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-8">
          {filteredData?.map((item) => (
            <div
              className="bg-white rounded-lg shadow-md border border-black w-full"
              key={item.id}
            >
              <div className="text-center">
                <img
                  src={item.image}
                  alt={item.equipment_name}
                  className="h-48 object-cover rounded-t-lg mx-auto sm:h-36 md:h-24 lg:h-32 xl:h-40"
                />
              </div>
              <div className="p-4">
                <div className="flex justify-center">
                  <div className="flex text-yellow-500">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <FontAwesomeIcon
                        icon={
                          i < Math.floor(5)
                            ? (faStar as IconProp)
                            : ["far", "star"]
                        }
                        key={i}
                      />
                    ))}
                  </div>
                </div>
                <h2 className="text-lg font-semibold text-center">
                  {item.equipment_name}
                </h2>
                <div className="mt-2 text-lg font-semibold text-center">
                  {item.price} KES
                </div>
                <div className="mt-4 flex justify-center">
                  <button className="bg-yellow-500 text-white px-4 py-2 rounded-full hover:bg-green-500">
                    <Link href={`/products/${item.id}`}>View More</Link>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default HomePage;
























