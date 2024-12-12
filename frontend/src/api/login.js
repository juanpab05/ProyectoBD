import axios from 'axios';

const API_URL = "http://127.0.0.1:8000/usuario/api/login";

export const loginUsuario = async (loginData) => {
  try {
    const response = await axios.post(API_URL, loginData);
    return response.data;
  } catch (error) {
    console.error("Error during login:", error);
    throw error;
  }
};
