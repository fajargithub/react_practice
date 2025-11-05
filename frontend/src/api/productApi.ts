import axios from "axios";

const API_BASE_URL = "http://localhost:5000/api/products";

export const getAllProducts = async () => {
  const response = await axios.get(API_BASE_URL);
  return response.data;
};

export const getProductById = async (id: string) => {
  const response = await axios.get(`${API_BASE_URL}/${id}`);
  return response.data;
};

export const createProduct = async (data: { name: string; price: number }) => {
  const response = await axios.post(API_BASE_URL, data);
  return response.data;
}

export const updateProduct = async (
  id: string, 
  data: { name?: string; price?: number }
) => {
  const response = await axios.put(`${API_BASE_URL}/${id}`, data);
  return response.data;
}

export const deleteProduct = async (id: string) => {
  const response = await axios.delete(`${API_BASE_URL}/${id}`);
  return response.data;
}