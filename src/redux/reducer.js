import { LOGIN, LOGOUT } from "./actions";

const initialState = {
  loggedIn: localStorage.getItem("loggedIn") === "true",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      localStorage.setItem("loggedIn", "true");
      return {
        ...state,
        loggedIn: true,
      };
    case LOGOUT:
      localStorage.removeItem("loggedIn");
      return {
        ...state,
        loggedIn: false,
      };
    default:
      return state;
  }
};

export default reducer;
