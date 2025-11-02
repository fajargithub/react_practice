import axios from "axios";

const API_BASE_URL = "http://localhost:5000/api/products";

export const getAllProducts = async () => {
  const response = await axios.get(API_BASE_URL);
  console.log(response.data);
  return response.data;
};

export const getProductById = async (id: string) => {
  const response = await axios.get(`${API_BASE_URL}/${id}`);
  console.log(response.data);
  return response.data;
};
