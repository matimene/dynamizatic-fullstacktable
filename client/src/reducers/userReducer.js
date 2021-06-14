import usersService from "../services/users";
import loginService from "../services/login";
import ordersService from "../services/orders";

const reducer = (state = null, action) => {
  switch (action.type) {
    case "LOGIN":
      return action.payload;
    case "SET_USER":
      return action.payload;
    case "LOGOUT":
      return null;
    case "CREATE_NEW":
      return null;
    default:
      return state;
  }
};

export const logout = () => {
  localStorage.removeItem("dynamizaticLoggedUser");

  return {
    type: "LOGOUT",
  };
};

export const setFromLocalStorage = (user) => {
  ordersService.setToken(user.token);

  return {
    type: "SET_USER",
    payload: user,
  };
};

export const login = ({ email, password }) => {
  return async (dispatch) => {
    const loggedUser = await loginService.login({ email, password });
    localStorage.setItem("dynamizaticLoggedUser", JSON.stringify(loggedUser));
    ordersService.setToken(loggedUser.token);
    dispatch({
      type: "LOGIN",
      payload: loggedUser,
    });
  };
};

export const createNew = ({ email, password }) => {
  return async (dispatch) => {
    await usersService.createNew({ email, password });

    dispatch({
      type: "CREATE_NEW",
    });
  };
};

export default reducer;
