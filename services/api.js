import axios from "axios";

const api = axios.create({
    baseURL: "https://mais1-code-backend-fo9k.onrender.com/api/",
  });

  export default api;