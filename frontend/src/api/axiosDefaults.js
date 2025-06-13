import axios from "axios";

// Determine the base API URL depending on environment
const apiUrl = process.env.NODE_ENV === "development" ? "http://localhost:8000" // Local development server
    : "https://gamebits-579c6fd85599.herokuapp.com"; // Production server (heroku)

axios.defaults.baseURL = `${apiUrl}/api/`;
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
axios.defaults.withCredentials = true;

axios.interceptors.request.use((config) => {
    const token = localStorage.getItem("access_token");
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});

export default axios;