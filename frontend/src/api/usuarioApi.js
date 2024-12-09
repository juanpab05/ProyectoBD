import axios from 'axios';

const API_URL = "http://127.0.0.1:8000/usuario/"

export const fetchUsuario = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};

export const createUsuario = async (usuarioData) => {
  try {
    const response = await axios.post(API_URL, usuarioData);
    return response.data; 
  } catch (error) {
    console.error("Error creating bus:", error);
    throw error;
  }
};
