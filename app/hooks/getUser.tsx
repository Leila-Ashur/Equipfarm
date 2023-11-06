import { useState } from 'react';
import { createUser } from '../utilities/utils';
interface UserData {  username: "",
  first_name: "",
  last_name: "",
  phone_number: "",
  location: "",
  role: "",
  }const usecreateUser = (userData: UserData) => {
  const [user, setUser] = useState({});
  const [error, setError] = useState('');
  const handleRegister = async () => {
    if (!userData.username ||  !userData.first_name || !userData.last_name|| ! userData.phone_number || !userData.role || !userData.location) {
      setError('Please fill in all fields');
      return;
    }
    const createdUser = await createUser(userData);
    if (createdUser.error) {
      setError(createdUser.error.message);
    } else {
      setUser(createdUser.user);
    }
  };
  return { handleRegister, user, error };
};
export default usecreateUser;