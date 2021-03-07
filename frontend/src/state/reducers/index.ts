import { combineReducers } from "redux";
import { cartReducer } from "./cartReducers";
import { productListReducer, productDetailReducer } from "./productReducers";

const reducers = combineReducers({
  //   repositories: repositoriesReducer,
  productList: productListReducer,
  productDetail: productDetailReducer,
  cart: cartReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
