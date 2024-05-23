import axios from 'axios';

export const logoutUser = async () => {
  try {
    const response = await axios.post('https://bkend-production.up.railway.app/api/v1/logout');
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getUserByEmailAndPassword = async (email, password) => {
  try {
    const response = await axios.post('https://bkend-production.up.railway.app/api/v1/login', {
      email: email,
      password: password
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
