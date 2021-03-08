import {
  ProductListActionType,
  ProductDetailActionType,
  CartActionType,
  AuthActionType,
} from "../action-types";

import ProductDetail from "../../interfaces/ProductDetail";
import CartItem from "../../interfaces/CartItem";
import UserInformation from "../../interfaces/userInfo";

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

interface UserLoginRequestAction {
  type: AuthActionType.USER_LOGIN_REQUEST;
}
interface UserLoginSuccessAction {
  type: AuthActionType.USER_LOGIN_SUCCESS;
  payload: UserInformation;
}
interface UserLoginFailAction {
  type: AuthActionType.USER_LOGIN_FAIL;
  payload: string;
}

interface UserLogoutAction {
  type: AuthActionType.USER_LOGOUT;
}

export type UserLoginAction =
  | UserLoginRequestAction
  | UserLoginSuccessAction
  | UserLoginFailAction
  | UserLogoutAction;

interface UserRegisterRequestAction {
  type: AuthActionType.USER_REGISTER_REQUEST;
}
interface UserRegisterSuccessAction {
  type: AuthActionType.USER_REGISTER_SUCCESS;
  payload: UserInformation;
}
interface UserRegisterFailAction {
  type: AuthActionType.USER_REGISTER_FAIL;
  payload: string;
}

export type UserRegisterAction =
  | UserRegisterRequestAction
  | UserRegisterSuccessAction
  | UserRegisterFailAction;

interface UserDetailRequestAction {
  type: AuthActionType.USER_DETAIL_REQUEST;
}
interface UserDetailSuccessAction {
  type: AuthActionType.USER_DETAIL_SUCCESS;
  payload: UserInformation;
}
interface UserDetailFailAction {
  type: AuthActionType.USER_DETAIL_FAIL;
  payload: string;
}

export type UserDetailAction =
  | UserDetailRequestAction
  | UserDetailSuccessAction
  | UserDetailFailAction;

interface UserUpdateRequestAction {
  type: AuthActionType.USER_UPDATE_REQUEST;
}
interface UserUpdateSuccessAction {
  type: AuthActionType.USER_UPDATE_SUCCESS;
  payload: UserInformation;
}
interface UserUpdateFailAction {
  type: AuthActionType.USER_UPDATE_FAIL;
  payload: string;
}
interface UserUpdateResetAction {
  type: AuthActionType.USER_UPDATE_RESET;
  payload: string;
}

export type UserUpdateAction =
  | UserUpdateRequestAction
  | UserUpdateSuccessAction
  | UserUpdateFailAction
  | UserUpdateResetAction;
