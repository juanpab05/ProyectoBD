import axios from 'axios';

const API_URL = "http://localhost:8000/profesorcurso/";

export const fetchCursos = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching courses:", error);
    throw error;
  }
};

export const fetchCursosPorProfesor = async (nombreUsuario) => {
    try {
      // Actualizamos la URL para incluir 'nombreUsuario' como parte de la ruta
      const response = await axios.get(`${API_URL}${nombreUsuario}/`);
      return response.data;
    } catch (error) {
      console.error("Error fetching professor's courses:", error);
      throw error;
    }
  };
  

export const createCursos = async (cursoData) => {
  try {
    const response = await axios.post(API_URL, cursoData);
    return response.data;
  } catch (error) {
    console.error("Error creating course:", error);
    throw error;
  }
};
