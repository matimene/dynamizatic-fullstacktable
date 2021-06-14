import ordersService from "../services/orders";

const reducer = (state = [], action) => {
  switch (action.type) {
    case "INIT_STORE":
      return action.payload;
    case "NEW_ORDER":
      return [...state, action.payload];
    case "UDPATE_ORDER":
      let updatedOrderState = [...state].map((order) =>
        order.id === action.payload.id ? action.payload : order
      );
      return updatedOrderState;
    case "DELETE_ORDER":
      return state.filter((order) => order.id !== action.payload);
    default:
      return state;
  }
};

export const initializeStore = () => {
  return async (dispatch) => {
    const orders = await ordersService.getAllOrders();

    dispatch({
      type: "INIT_STORE",
      payload: orders,
    });
  };
};

export const newOrder = (order) => {
  return async (dispatch) => {
    const newOrder = await ordersService.createOrder(order);

    dispatch({
      type: "NEW_ORDER",
      payload: newOrder,
    });
  };
};

export const updateOrder = (order) => {
  return async (dispatch) => {
    const updatedOrder = await ordersService.updateOrder(order);

    dispatch({
      type: "UPDATE_ORDER",
      payload: updatedOrder,
    });
  };
};

export const deleteOrder = (id) => {
  return async (dispatch) => {
    await ordersService.eraseOrder(id);

    dispatch({
      type: "DELETE_ORDER",
      payload: id,
    });
  };
};

export default reducer;
