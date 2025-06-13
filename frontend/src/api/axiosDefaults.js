import axios from 'axios';

// Determine the base API URL depending on environment
const apiUrl = process.env.REACT_APP_API_URL;

axios.defaults.baseURL = `${apiUrl}/api/`;
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data';
axios.defaults.withCredentials = true;

axios.interceptors.request.use((config) => {
  const newConfig = { ...config };
  const token = localStorage.getItem('access_token');
  if (token) {
    newConfig.headers.Authorization = `Bearer ${token}`;
  }
  return newConfig;
}, (error) => Promise.reject(error));

export default axios;
