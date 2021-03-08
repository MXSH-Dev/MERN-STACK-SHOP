import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import CartItem from "../interfaces/CartItem";
import reducers from "./reducers/index";

import UserInformation from "../interfaces/userInfo";

const cartItemsFromStorage = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems") || "{}")
  : ([] as CartItem[]);

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? (JSON.parse(localStorage.getItem("userInfo") || "{}") as UserInformation)
  : null;

console.log(userInfoFromStorage);

const initialState = {
  cart: {
    cartItems: cartItemsFromStorage,
  },
  userLogin: { loading: false, userInfo: userInfoFromStorage, error: null },
};

export const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
);
