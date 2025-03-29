import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api.tripkolic.com/api/v1',
  timeout: 5000,
})

export const login = async (userId: string, password: string) => {
  try {
    const response = await api.post('/task/login', { userId, password })
    return response.data
  } catch (error) {
    throw error
  }
}

// Diğer API fonksiyonları buraya eklenebilir