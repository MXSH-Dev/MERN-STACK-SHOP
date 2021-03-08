import { combineReducers } from "redux";
import { cartReducer } from "./cartReducers";
import { productListReducer, productDetailReducer } from "./productReducers";
import { userLoginReducer } from "./userReducers";

const reducers = combineReducers({
  //   repositories: repositoriesReducer,
  productList: productListReducer,
  productDetail: productDetailReducer,
  cart: cartReducer,
  userLogin: userLoginReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
