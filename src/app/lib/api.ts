import axios from 'axios';

const API_BASE_URL = 'https://api.tripkolic.com/api/v1/task';

export const login = async (credentials: { userId: string; password: string }) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/login`, credentials);
    return response.data;
  } catch (error) {
    throw error;
  }
};