"use client";
import React, { useState } from "react";
import { BiEdit } from "react-icons/bi";
import { MdDeleteForever } from "react-icons/md";
// import Sidebar from '../Sidebar/page';
import axios from "axios"

import { FaSearch } from "react-icons/fa";
import useGetOrders from "@/app/hooks/getBookings";



// const initialDataRecords = [
//   {
//     User: 'Saru',
//     PhoneNumber: '0701234550',
//     Equipment:'Slasher',
//     Date_Booked: '1/7/2023',
//     Date_Returned: '16/8/2023',
//     Amount:45000,

//   },
//   {
//     User: 'Cynthia',
//     PhoneNumber: '0701234534',
//     Equipment:'Loader',
//     Date_Booked: '1/7/2023',
//     Date_Returned: '16/8/2023',
//     Amount:45000,

//   },
//   {
//     User: 'Nyambura',
//     PhoneNumber: '0740456788',
//     Equipment:'Backhoe',
//     Date_Booked: '1/7/2023',
//     Date_Returned: '1/5/2023',
//     Amount:45000,

//   },
//   {
//     User: 'Cynthia',
//     PhoneNumber: '0701234534',
//     Equipment:'Loader',
//     Date_Booked: '1/7/2023',
//     Date_Returned: '16/8/2023',
//     Amount:45000,

//   },

//   {
//     User: 'Queen',
//     PhoneNumber: '0701234600',
//     Equipment:'Cultivator',
//     Date_Booked: '1/7/2023',
//     Date_Returned: '18/9/2023',
//     Amount:45000,

//   },
//   {
//     User: 'Vicky',
//     PhoneNumber: '0701494550',
//     Equipment:'Cultivator',
//     Date_Booked: '1/7/2023',
//     Date_Returned: '1/3/2023',
//     Amount:45000,

//   },
//   {
//     User: 'Queen',
//     PhoneNumber: '0701234600',
//     Equipment:'Cultivator',
//     Date_Booked: '1/7/2023',
//     Date_Returned: '18/9/2023',
//     Amount:45000,

//   },
//   {
//     User: 'Akinyii',
//     PhoneNumber: '0701934580',
//     Equipment:'Plow',
//     Date_Booked: '1/7/2023',
//     Date_Returned: '1/9/2023',
//     Amount:45000,

//   },
//   {
//     User: 'Ivy',
//     PhoneNumber: '0740454550',
//     Equipment:'B',
//     Date_Booked: '1/7/2023',
//     Date_Returned: '1/9/2023',
//     Amount:45000,

//   }
// ];

const DataRecords = () => {
  const { Orders, loading, error } = useGetOrders();

  // const myOrders=async()=>{

  //   const response = await axios.get('https://3e84-41-80-118-131.ngrok-free.app/api/Bookings/');
  //   // show ui
  //     console.log("rerrretr" ,  response.body)

  // }
  console.log("order", Orders);
  if (loading) {
    return <div>loading</div>;
  }
  if (error) {
    return <div>error</div>;
  }
  // const [searchQuery, setSearchQuery] = useState();
  // const [dataRecords, setDataRecords] = useState(order);
  let dataRecords;
  dataRecords = Orders;
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value.toLowerCase();
    console.log(query);

    // setSearchQuery(query);
    const filtered = Orders.filter((record) => {
      const recordValues = Object.values(record).map((value) =>
        typeof value === "string" ? value.toLowerCase() : value
      );
      return recordValues.some((value) => value.includes(query));
    });
    dataRecords = filtered;
  };

  return (
    <div className="pl-20 font-['Sanchez'] ml-52">
      <h1 className="text-2xl font-semibold text-orange-400 mb-2 py-4">
        Orders
      </h1>
      <div className="flex space-x-4 mb-4">
        <div className="relative w-100 w-full">
          <input
            type="search"
            placeholder="Search..."
            className="border border-gray-500 rounded-full p-2 text-black pl-10 pr-6 w-full focus:outline-none"
            onChange={handleSearchChange}
          />
          <FaSearch className="w-6 h-6 text-gray-900 absolute left-3 top-1/2 transform -translate-y-1/2" />
        </div>
      </div>
      <table className="space-evenly ml-16" style={{ tableLayout: "fixed" }}>
        <thead>
          <tr className="border-b border-solid border-gray-500">
            <th className="py-4 px-14 text-left text-20 font-semibold">User</th>
            {/* <th className="py-4 px-6 text-left text-20 font-semibold">Phone Number</th> */}
            <th className="py-4 px-10 text-left text-20 font-semibold">
              Date Booked
            </th>
            <th className="py-4 px-16 text-left text-20 font-semibold">
              Duration
            </th>
            <th className="py-4 px-10 text-left text-20 font-semibold">
              Equipment Category
            </th>
            <th className="py-4 px-16 text-left text-20 font-semibold">
              Equipment
            </th>
            <th className="py-4 px-16 text-left text-20 font-semibold">
              Status
            </th>
          </tr>
        </thead>
        <tbody>
          {dataRecords.map((record, index) => (
            <tr key={index} className="border-b border-solid border-gray-500">
              <td className="py-4 px-16">{record.customer_name}</td>
              {/* <td className="py-4 px-8">{record.PhoneNumber}</td> */}
              <td className="py-4 px-10">{record.booking_date}</td>
              <td className="py-4 px-16">{record.duration}</td>
              <td className="py-4 px-10">{record.equipment_category}</td>
              <td className="py-4 px-16">{record.equipment_name}</td>
              <td className="py-4 px-16">
                {index % 2 === 0 ? (
                  <button className="bg-green-400 text-white text-lg px-4 py-2 rounded hover:bg-yellow-400">
                    Delivery
                  </button>
                ) : (
                  <button className="bg-yellow-400 text-white text-lg px-4 py-2 rounded hover:bg-green-600">
                    Pending
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataRecords;

// 'use client'
// import React, { useState } from 'react';
// import { BiEdit } from "react-icons/bi";
// import { MdDeleteForever } from "react-icons/md";
// // import Sidebar from '../Sidebar/page';
// import { FaSearch } from "react-icons/fa";
// const initialDataRecords = [
//   {
//     User: 'Saru',
//     PhoneNumber: '0701234550',
//     Equipment:'Slasher',
//     Date_Booked: '1/7/2023',
//     Date_Returned: '16/8/2023',
//     Amount:45000,

//   },
//   {
//     User: 'Cynthia',
//     PhoneNumber: '0701234534',
//     Equipment:'Loader',
//     Date_Booked: '1/7/2023',
//     Date_Returned: '16/8/2023',
//     Amount:45000,

//   },
//   {
//     User: 'Nyambura',
//     PhoneNumber: '0740456788',
//     Equipment:'Backhoe',
//     Date_Booked: '1/7/2023',
//     Date_Returned: '1/5/2023',
//     Amount:45000,

//   },
//   {
//     User: 'Mwangombe',
//     PhoneNumber: '0701234550',
//     Equipment:'Cultipacker',
//     DateBooked: '1/9/2023',
//     Date_Booked: '1/7/2023',
//     Amount:45000,

//   },
//   {
//     User: 'Berryl',
//     PhoneNumber: '07049050',
//     Equipment:'Milking machines',
//     Date_Booked: '1/7/2023',
//     Date_Retured: '1/9/2023',
//     Amount:45000,

//   },
//   {
//     User: 'Vicky',
//     PhoneNumber: '0701494550',
//     Equipment:'Cultivator',
//     Date_Booked: '1/7/2023',
//     Date_Returned: '1/3/2023',
//     Amount:45000,

//   },
//   {
//     User: 'Queen',
//     PhoneNumber: '0701234600',
//     Equipment:'Cultivator',
//     Date_Booked: '1/7/2023',
//     Date_Returned: '18/9/2023',
//     Amount:45000,

//   },
//   {
//     User: 'Akinyii',
//     PhoneNumber: '0701934580',
//     Equipment:'Plow',
//     Date_Booked: '1/7/2023',
//     Date_Returned: '1/9/2023',
//     Amount:45000,

//   },
//   {
//     User: 'Ivy',
//     PhoneNumber: '0740454550',
//     Equipment:'B',
//     Date_Booked: '1/7/2023',
//     Date_Returned: '1/9/2023',
//     Amount:45000,

//   }
// ];
// const DataRecords = () => {
//   const [searchQuery, setSearchQuery] = useState('');
//   const [dataRecords, setDataRecords] = useState(initialDataRecords);
//   const [isEditing, setIsEditing] = useState(false);
//   const [editIndex, setEditIndex] = useState(-1);
//   const handleSearchChange = (e: { target: { value: string; }; }) => {
//     const query = e.target.value.toLowerCase();
//     setSearchQuery(query);
//     const filtered = initialDataRecords.filter((record) => {
//       const recordValues = Object.values(record).map((value) =>
//         typeof value === "string" ? value.toLowerCase() : value
//       );
//       return recordValues.some((value) => value.includes(query));
//     });
//     setDataRecords(filtered);
//   };
//   const handleDelete = (index: number) => {
//     const newDataRecords = [...dataRecords];
//     newDataRecords.splice(index, 1);
//     setDataRecords(newDataRecords);
//   };
//   const handleEdit = (index: React.SetStateAction<number>) => {
//     setIsEditing(true);
//     setEditIndex(index);
//   };
//   const handleEditChange = (field: string, value: string) => {
//     setDataRecords((prevData) => {
//       return prevData.map((record, index) => {
//         if (index === editIndex) {
//           return { ...record, [field]: value };
//         }
//         return record;
//       });
//     });
//   };

//   return (
//     <div className="  pl-20 font-['Sanchez'] ml-52   ">
//       <h1 className="text-2xl font-semibold text-orange-400 mb-2 py-4 ">Orders</h1>
//       <div className="flex space-x-4 mb-4">
//         <div className="relative w-100  w-full ">
//           <input
//             type="search"
//             placeholder="Search..."
//             className="border border-gray-500 rounded-full p-2 text-black pl-10 pr-6 w-full focus:outline-none"
//             onChange={handleSearchChange}
//           />
//           <FaSearch className="w-6 h-6 text-gray-900 absolute left-3 top-1/2 transform -translate-y-1/2" />
//         </div>
//       </div>
//       <table className="space-evenly" style={{ tableLayout: 'fixed' }}>
//         <thead>
//           <tr className="border-b border-solid border-gray-500">
//             <th className="py-4 px-14 text-left text-20 font-semibold">User</th>
//             <th className="py-4 px-6 text-left text-20 font-semibold">Phone Number</th>
//             <th className="py-4 px-6 text-left text-20 font-semibold">Equipment</th>
//             <th className="py-4 px-6 text-left text-20 font-semibold">Amount</th>
//             {/* <th className="py-4 px-14 text-left text-20 font-semibold">Edit</th> */}
//           </tr>
//         </thead>
//         <tbody>
//           {dataRecords.map((record, index) => (
//             <tr key={index} className="border-b border-solid border-gray-500">
//               <td className="py-4 px-16">
//                 {isEditing && editIndex === index ? (
//                   <input
//                     type="text"
//                     value={record.User}
//                     onChange={(e) => handleEditChange('User', e.target.value)}
//                     className="bg-gray-300 text-gray-800 rounded p-2"
//                   />
//                 ) : (
//                   record.User
//                 )}
//               </td>
//               <td className="py-4 px-8">
//                 {isEditing && editIndex === index ? (
//                   <input
//                     type="text"
//                     value={record.PhoneNumber}
//                     onChange={(e) => handleEditChange('PhoneNumber', e.target.value)}
//                     className="bg-gray-300 text-gray-800 rounded p-2"
//                   />
//                 ) : (
//                   record.PhoneNumber
//                 )}
//               </td>
//               <td className="py-4 px-10">
//                 {isEditing && editIndex === index ? (
//                   <input
//                     type="text"
//                     value={record.Equipment}
//                     onChange={(e) => handleEditChange('Equipment', e.target.value)}
//                     className="bg-gray-300 text-gray-800 rounded p-2"
//                   />
//                 ) : (
//                   record.Equipment
//                 )}
//               </td>
//               <td className="py-4 px-16">
//                 {isEditing && editIndex === index ? (
//                   <input
//                     type="text"
//                     value={record.Amount}
//                     onChange={(e) => handleEditChange('Amount', e.target.value)}
//                     className="bg-gray-300 text-gray-800 rounded p-2"
//                   />
//                 ) : (
//                   record.Amount
//                 )}
//               </td>
//               {/* <td className="py-4 px-16 flex space-x-2">
//                 {isEditing && editIndex === index ? (
//                   <>
//                     <button
//                       className="bg-orange-400 text-black text-lg px-4 py-2 rounded hover:bg-indigo-600"
//                       onClick={handleSaveEdit}
//                     >
//                       Save
//                     </button>
//                     <button
//                       className="bg-indigo-600 text-white text-lg px-4 py-2 rounded hover:bg-orange-400"
//                       onClick={cancelEdit}
//                     >
//                       Cancel
//                     </button>
//                   </>
//                 ) : (
//                 //   <BiEdit
//                 //     size={25}
//                 //     className="text-indigo-600 cursor-pointer"
//                 //     onClick={() => handleEdit(index)}
//                 //   />
//                 // )}
//                 // <MdDeleteForever
//                 //   size={25}
//                 //   className="text-green-400 cursor-pointer"
//                 //   onClick={() => handleDelete(index)}
//                 // />
//               </td> */}
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };
// export default DataRecords;
