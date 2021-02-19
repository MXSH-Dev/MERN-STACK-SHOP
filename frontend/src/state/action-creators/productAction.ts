import axios from "axios";
import { Dispatch } from "redux";

import {
  ProductListActionType,
  ProductDetailActionType,
} from "../action-types/index";
import { ProductListAction, ProductDetailAction } from "../actions/index";

export const listProducts = () => {
  return async (dispatch: Dispatch<ProductListAction>) => {
    try {
      dispatch({ type: ProductListActionType.PRODUCT_LIST_REQUEST });
      const { data } = await axios.get("/api/products");
      dispatch({
        type: ProductListActionType.PRODUCT_LIST_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ProductListActionType.PRODUCT_LIST_ERROR,
        payload:
          error.message && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
};

export const listProductDetail = (productId: string) => {
  return async (dispatch: Dispatch<ProductDetailAction>) => {
    try {
      dispatch({ type: ProductDetailActionType.PRODUCT_DETAIL_REQUEST });
      const { data } = await axios.get(`/api/products/${productId}`);
      dispatch({
        type: ProductDetailActionType.PRODUCT_DETAIL_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ProductDetailActionType.PRODUCT_DETAIL_ERROR,
        payload:
          error.message && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
};
