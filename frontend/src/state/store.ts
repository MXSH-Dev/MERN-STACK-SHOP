import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import CartItem from "../interfaces/CartItem";
import reducers from "./reducers/index";

const cartItemsFromStorage = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems") || "{}")
  : ([] as CartItem[]);
const initialState = {
  cart: {
    cartItems: cartItemsFromStorage,
  },
};

export const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
);
