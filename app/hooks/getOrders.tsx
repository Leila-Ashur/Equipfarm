import { BASE_URL } from "@/app/config";
import { useState, useEffect, ReactNode} from "react";

interface BookingData{

  customer_name: string,
  equipment_name: string
  booking_date: string,
  equipment_category: string,}
const useGetBooking = () => {
const [success, setSuccess] = useState<BookingData[]>([]);
const [fetchToggle, setFetchToggle] =  useState(false);
useEffect(()=>{
  (async()=>{
    const response = await fetch(`${BASE_URL}/api/Orders/`);

    setSuccess([])
  })()
}, [fetchToggle])
return {success,
refetch : ()=> setFetchToggle(!fetchToggle)}
};
export default useGetBooking;





