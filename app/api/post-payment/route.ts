
import {BASE_URL} from "@/app/config"
export async function POST(request: Request) {
  try {
    if (!BASE_URL) {
      return new Response("Base url not found", {
        status: 404,
        statusText: "Failed",
      });
    }
    const payment = await request.json().then(async (response) => {
      const result = await fetch(`${BASE_URL}/MpesaDaraja/stkpush/`, {


        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(response),
      });
      const payments = await result.json();
      console.log("response",payments);
      
      return payments;
      
    });
    return new Response(JSON.stringify(payment), {
      status: 201,
      statusText: "Success",
    });
  } catch (error: any) {
    return new Response(error.message, {
      status: 500,
      statusText: "Failed",
    });
  }
}