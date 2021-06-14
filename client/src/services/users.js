import axios from "axios";

const baseUrl = "/api/users";

const createNew = async ({ email, password }) => {
  const response = await axios.post(baseUrl, { email, password });
  return response.data;
};

const getAll = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

export default { createNew, getAll };
