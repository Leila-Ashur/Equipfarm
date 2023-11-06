import { useState } from 'react';
import { useRouter } from 'next/router';
import { loginUser } from '../utilities/utils';
interface LoginData {
  username: "";
  phone_number: "",
}const useLogin = (loginData: LoginData) => {
  const router = useRouter();
  const [user, setUser] = useState();
  const handleLogin = async () => {
    const response = await loginUser(loginData);
    if (response && response.message === 'Logged in successfully') {
      router.replace('/registration');
    } else {
      router.push('/login');
    }
    setUser(response);
  };
  return { user, handleLogin };
};
export default useLogin;