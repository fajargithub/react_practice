import axios from 'axios';
const API_BASE_URL = 'http://localhost:5000/api/users';

export const getAllUsers = async () => {
  const response = await axios.get(API_BASE_URL);
  return response.data;
}

export const getUserById = async (id: string) => {
  const response = await axios.get(`${API_BASE_URL}/${id}`);
  return response.data;
}

export const createUser = async (data: { name: string, phone: string, email: string, address: string, password: string }) => {
  const response = await axios.post(API_BASE_URL, data);
  return response.data;
}

export const updateUser = async (id: string, data: { name: string, phone: string, email: string, address: string, password: string }) => {
  const response = await axios.put(`${API_BASE_URL}/${id}`, data);
  return response.data;
}

export const deleteUser = async (id: string) => {
  const response = await axios.delete(`${API_BASE_URL}/${id}`);
  return response.data;
}
