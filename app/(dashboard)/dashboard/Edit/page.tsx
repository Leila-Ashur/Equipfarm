"use client";
import Products from '@/app/Data copy/data';
import { BASE_URL } from '@/app/config';
import { CldUploadWidget, CldUploadWidgetResults } from 'next-cloudinary';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

import { FormEvent, useState } from 'react';

export default function ProductUploadForm() {
  const [product, setProduct] = useState({
    equipment_name: '',
    description: '',
    price: '',
    category: 1, 
    quantity: 0,
    image:''
  });
  const router=useRouter()
  
  const handleInputChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleCategoryChange = (e: { target: { value: any; }; }) => {
    setProduct({ ...product, category: parseInt(e.target.value )});
  };

  const handleImageUpload = (results: any, widget: any ) => {
    setProduct({ ...product, image: results.info?.secure_url
    });
  };

  const handleUploadProduct = async(e: FormEvent) => {
   e.preventDefault()
   try {
    const response = await fetch(`${BASE_URL}/api/catalogue/`, {
      method: "POST",  
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product), 
    });
    console.log(response)
    router.push('/dashboard')
   } catch (error) {
    console.log(error);

   }
  };


  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-semibold mb-4">Edit Product </h2>
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium">
              Product Name
            </label>
            <input
              type="text"
              id="name"
              name="equipment_name"
              value={product.equipment_name}
              onChange={handleInputChange}
              className="w-full rounded border border-gray-300 p-2"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="description" className="block text-sm font-medium">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={product.description}
              onChange={handleInputChange}
              className="w-full rounded border border-gray-300 p-2"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="price" className="block text-sm font-medium">
              Price
            </label>
            <input
              type="number"
              id="price"
              name="price"
              value={product.price}
              onChange={handleInputChange}
              className="w-full rounded border border-gray-300 p-2"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="category" className="block text-sm font-medium">
              Category
            </label>
            <select
              id="category"
              name="category"
              value={product.category}
              onChange={handleCategoryChange}
              className="w-full rounded border border-gray-300 p-2"
            >
              <option value="1">Farm Equipment</option>
              <option value="2">Dairy Equipment</option>
              <option value="3">Poultry Equipment</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="quantity" className="block text-sm font-medium">
              Quantity
            </label>
            <input
              type="number"
              id="quantity"
              name="quantity"
              value={product.quantity}
              onChange={handleInputChange}
              className="w-full rounded border border-gray-300 p-2"
            />
          </div>
          <div>
          <CldUploadWidget uploadPreset="yvxfzkog" onUpload={handleImageUpload}>
  {({ open }) => {
    function handleOnClick(e: FormEvent) {
      e.preventDefault();
      open();
    }
    return (
      <button className="button" onClick={handleOnClick}>
        Upload an Image
      </button>
    );
  }}
</CldUploadWidget>
          </div>
          <div className="mb-4">
            {/* <label htmlFor="image" className="block text-sm font-medium">
              Product Image
            </label>
            <input
              type="file"
              id="image"
              name="image"
              onChange={handleImageChange}
              accept="image/*"
              className="w-full p-2"
            /> */}
          </div>
          <button
            type="submit"
            onClick={handleUploadProduct}
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
         
            <Link href="{/dashboard/catalog}">
            Upload
            </Link>
           
          </button>


          
        </form>
      </div>
    </div>
  );
}