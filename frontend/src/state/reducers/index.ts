import { combineReducers } from "redux";
import { productListReducer, productDetailReducer } from "./productReducers";

const reducers = combineReducers({
  //   repositories: repositoriesReducer,
  productList: productListReducer,
  productDetail: productDetailReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
