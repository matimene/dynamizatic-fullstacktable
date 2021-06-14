import axios from "axios";

const baseUrl = "/api/login";

const login = async ({ email, password }) => {
  const response = await axios.post(baseUrl, { email, password });
  return response.data;
};

export default { login };
