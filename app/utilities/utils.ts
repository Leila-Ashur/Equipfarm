export const getProducts = async()=>{
  const url = '/api/get-products';
  try {
    const response = await fetch(url);
    console.log({response});
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const result = await response.json();
    return result;
  } catch (error:any) {
    throw new Error(error.message || 'Failed to fetch ');
  }
}


export const getBooking = async()=>{
  const url = '/api/get-booking';
  try {
    const response = await fetch(url);
    console.log({response});
    if (!response.ok) {
      throw new Error('Page not found');
    }
    const result = await response.json();
    return result;
  } catch (error:any) {
    throw new Error(error.message || 'Failed to fetch booking');
  }
}

// from  api 
export const getOrders = async()=>{
  const url = '/api/get-Orders';
  try {
    const response = await fetch(url);
    console.log("orders data",{response});
    if (!response.ok) {
      throw new Error('Page not found');
    }
    const result = await response.json();
    return result;
  } catch (error:any) {
    throw new Error(error.message || 'Failed to fetch booking');
  }
}


interface UserData {
  username: "",
    first_name: "",
    last_name: "",
    phone_number: "",
    location: "",
    role: "",
}
export const createUser = async (userData: UserData) => {
  const url = '/api/register-user';
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
    const result = await response.json();
    return result;
  } catch (error: any) {
    return error.message;
  }
};interface LoginData {
  username: "";
  phone_number: "",
}


export const loginUser = async (loginData: LoginData) => {
  const url = '/api/login-user';
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(loginData),
    });
    const result = await response.json();
    return result;
  } catch (error: any) {
    return error.message;
    console.error(error);
  }
};





// import axios from 'axios';
// export interface UserDetails {
//   username: string;
//   phone_number: string;

// }
// export const createUser = async (userdetails: UserDetails) => {
//   const url = `/api/register-user`;
//   try {
//     const response = await axios.post(url, userdetails, {
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });
//     const result = response.data;
//     return result;
//   } catch (error: any) {
//     return error.message;
//   }
// };





// export const loginuser = async (username: string, phone_number: string) => {
//   try {
//     const response = await axios.post('/api/login-user', {
//       username: username,
//       phone_number: phone_number,
//     }, {
//       headers: {
//         'Accept': 'application/json',
//         'Content-Type': 'application/json',
//       }
//     });
//     return response.data;
//   } catch (error) {
//     console.error("Error logging in loguser:", error);
//     return [];
//   }
// };






export const createPayment = async (PaymentData: any) => {
  try {
    const response = await fetch('/api/post-payment/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(PaymentData),
    });
    if(!response.ok){
      return{error:'an error occurred'}
    }
    const result = await response.json();
    return result
  } catch (error: any) {
    return {error:error.message};
  }
};









