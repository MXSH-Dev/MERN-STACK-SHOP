import {
  ProductListActionType,
  ProductDetailActionType,
  CartActionType,
} from "../action-types";

import ProductDetail from "../../interfaces/ProductDetail";
import CartItem from "../../interfaces/CartItem";

interface ProductListRequestAction {
  type: ProductListActionType.PRODUCT_LIST_REQUEST;
}

interface ProductListSuccessAction {
  type: ProductListActionType.PRODUCT_LIST_SUCCESS;
  payload: ProductDetail[];
}

interface ProductListErrorAction {
  type: ProductListActionType.PRODUCT_LIST_ERROR;
  payload: string;
}

export type ProductListAction =
  | ProductListRequestAction
  | ProductListSuccessAction
  | ProductListErrorAction;

interface ProductDetailRequestAction {
  type: ProductDetailActionType.PRODUCT_DETAIL_REQUEST;
}

interface ProductDetailSuccessAction {
  type: ProductDetailActionType.PRODUCT_DETAIL_SUCCESS;
  payload: ProductDetail;
}

interface ProductDetailErrorAction {
  type: ProductDetailActionType.PRODUCT_DETAIL_ERROR;
  payload: string;
}

export type ProductDetailAction =
  | ProductDetailRequestAction
  | ProductDetailSuccessAction
  | ProductDetailErrorAction;

interface CartAddAction {
  type: CartActionType.CART_ADD_ITEM;
  payload: CartItem;
}

interface CartRemoveAction {
  type: CartActionType.CART_REMOVE_ITEM;
  payload: string;
}

export type CartAction = CartAddAction | CartRemoveAction;
