import axios from 'axios';

const API_URL = "http://127.0.0.1:8000/clase/"

export const fetchClase = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching classes:", error);
    throw error;
  }
};

export const createClase = async (claseData) => {
  try {
    const response = await axios.post(API_URL, claseData);
    return response.data; 
  } catch (error) {
    console.error("Error creating bus:", error);
    throw error;
  }
};
