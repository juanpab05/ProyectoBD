import axios from 'axios';

const API_URL = "http://localhost:8000/clase/"

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

export const obtenerClasesCurso = async (nombreUsuario, nombreCurso) => {
  try {
    const response = await axios.get(`${API_URL}${nombreUsuario}/${nombreCurso}/historial/`);
    return response.data; // Devuelve las clases obtenidas de la API
  } catch (error) {
    console.error("Error al obtener las clases del curso:", error);
    throw new Error("No se pudieron cargar las clases.");
  }
};
