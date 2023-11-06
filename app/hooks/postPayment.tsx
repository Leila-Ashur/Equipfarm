import { createPayment } from "../utilities/utils";
import { useState } from "react";
interface PaymentData {
  phone_number: string;
  amount: number;
}
const useCreatePayment = () => {
  const [payment, setPayment] = useState<PaymentData | null>(null);
  const createNewPayment = async (PaymentData: PaymentData) => {
    try {
      const newPayment = await createPayment(PaymentData);
      setPayment(newPayment);
    } catch (error) {
      console.error("Error creating a payment:", error);
    }
  };
  return { payment, createNewPayment };
};
export default useCreatePayment;