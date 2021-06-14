const initialState = {
  term: null,
  status: null,
  type: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_FILTER":
      return action.payload;
    case "CLEAR_FILTER":
      return initialState;
    default:
      return state;
  }
};

export const setFilter = (filters) => {
  return {
    type: "SET_FILTER",
    payload: filters,
  };
};

export const clearFilter = () => {
  return {
    type: "CLEAR_FILTER",
  };
};

export default reducer;
