import axios from "axios";

axios.defaults.baseURL = "https://gamebits-579c6fd85599.herokuapp.com/";
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
axios.defaults.withCredentials = true;