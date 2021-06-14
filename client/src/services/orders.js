import axios from "axios";

const baseUrl = "/api/orders";

let token = null;

const setToken = (newToken) => {
  token = `bearer ${newToken}`;
};

const getAllOrders = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

const getOrder = async (id) => {
  const response = await axios.get(`${baseUrl}/${id}`);
  return response.data;
};

const createOrder = async (order) => {
  const config = {
    headers: { Authorization: token },
  };

  const response = await axios.post(baseUrl, order, config);
  return response.data;
};

const updateOrder = async (order) => {
  const config = {
    headers: { Authorization: token },
  };

  const updatedOrder = { ...order };
  delete updatedOrder.id;

  const response = await axios.put(
    `${baseUrl}/${order.id}`,
    updatedOrder,
    config
  );

  return response.data;
};

const eraseOrder = async (id) => {
  const config = {
    headers: { Authorization: token },
  };

  const response = await axios.delete(`${baseUrl}/${id}`, config);

  return response.data;
};

export default {
  setToken,
  getAllOrders,
  getOrder,
  createOrder,
  updateOrder,
  eraseOrder,
};
