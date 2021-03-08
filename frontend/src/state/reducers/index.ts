import { combineReducers } from "redux";
import { cartReducer } from "./cartReducers";
import { productListReducer, productDetailReducer } from "./productReducers";
import {
  userDetailReducer,
  userLoginReducer,
  userRegisterReducer,
  userUpdateProfileReducer,
} from "./userReducers";

const reducers = combineReducers({
  //   repositories: repositoriesReducer,
  productList: productListReducer,
  productDetail: productDetailReducer,
  cart: cartReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetailReducer,
  userUpdateProfile: userUpdateProfileReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
