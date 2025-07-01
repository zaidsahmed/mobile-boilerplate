import { Network } from '@/constants'
import axios from 'axios'

// Create an Axios instance with default config
const api = axios.create({
  // baseURL: process.env.REACT_APP_API_BASE_URL || 'https://api.example.com',
  baseURL: Network.BASE_URL || 'https://api.example.com',
  timeout: 10000, // 10 seconds
  headers: {
    'Content-Type': 'application/json',
  },
})

// Single function for all API-related error handling
export function handleApiError(error) {
  if (error.response) {
    // Server responded with a status other than 2xx
    return {
      message: error.response.data?.message || 'An error occurred.',
      status: error.response.status,
      data: error.response.data,
    }
  } else if (error.request) {
    // Request was made but no response received
    return {
      message: 'No response from server. Please check your network connection.',
      status: null,
      data: null,
    }
  } else {
    // Something else happened
    return {
      message: error.message || 'An unknown error occurred.',
      status: null,
      data: null,
    }
  }
}

// Request interceptor (optional: add auth tokens or other logic here)
api.interceptors.request.use(
  (config) => {
    // Example: Add auth token if available
    // const token = localStorage.getItem('token');
    // if (token) {
    //   config.headers['Authorization'] = `Bearer ${token}`;
    // }
    return config
  },
  (error) => Promise.reject(handleApiError(error))
)

// Response interceptor for global error handling
api.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(handleApiError(error))
)

export default api
