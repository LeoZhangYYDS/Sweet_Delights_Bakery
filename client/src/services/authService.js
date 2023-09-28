import api from "../services/api";

// Register POST Request
async function register(data) {
  const response = await api.post("/auth/register", data);
  console.log(response?.data);
  return response;
}

// Login POST Request
async function login(data) {
  const response = await api.post("/auth/login", data);
  console.log(response?.data);
  return response;
}

const authService = {
  register,
  login,
};

export default authService;
