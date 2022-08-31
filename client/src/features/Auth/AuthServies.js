import axios from "axios";
const API_URL = "http://localhost:5000/";
//register
const register = async (userdata) => {
  const response = await axios.post(API_URL, userdata);
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

//login
const login = async (userdata) => {
  const response = await axios.post(API_URL + "loginUser", userdata);
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

//logout
const logout = () => {
  localStorage.removeItem("user");
};
const authService = {
  register,
  login,
  logout,
};

export default authService;
