import { userInfo } from "node:os";
import UserInformation from "../../interfaces/userInfo";
import { AuthActionType } from "../action-types";
import {
  UserLoginAction,
  UserRegisterAction,
  UserDetailAction,
  UserUpdateAction,
} from "../actions";

interface UserLoginState {
  loading: boolean;
  userInfo: UserInformation | null;
  error: string | null;
}

const initalUserLoginState: UserLoginState = {
  loading: false,
  userInfo: null,
  error: null,
};

export const userLoginReducer = (
  state: UserLoginState = initalUserLoginState,
  action: UserLoginAction
): UserLoginState => {
  switch (action.type) {
    case AuthActionType.USER_LOGIN_REQUEST:
      return { ...state, loading: true, userInfo: null, error: null };
    case AuthActionType.USER_LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        userInfo: action.payload,
        error: null,
      };
    case AuthActionType.USER_LOGIN_FAIL:
      return {
        ...state,
        loading: false,
        userInfo: null,
        error: action.payload,
      };
    case AuthActionType.USER_LOGOUT:
      return initalUserLoginState;
    default:
      return { ...state };
  }
};

export const userRegisterReducer = (
  state: UserLoginState = initalUserLoginState,
  action: UserRegisterAction
): UserLoginState => {
  switch (action.type) {
    case AuthActionType.USER_REGISTER_REQUEST:
      return { ...state, loading: true, userInfo: null, error: null };
    case AuthActionType.USER_REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
        userInfo: action.payload,
        error: null,
      };
    case AuthActionType.USER_REGISTER_FAIL:
      return {
        ...state,
        loading: false,
        userInfo: null,
        error: action.payload,
      };
    default:
      return { ...state };
  }
};

interface UserProfileState {
  loading: boolean;
  user: UserInformation | null;
  error: string | null;
}

const initalUserProfileState: UserProfileState = {
  loading: false,
  user: null,
  error: null,
};

export const userDetailReducer = (
  state: UserProfileState = initalUserProfileState,
  action: UserDetailAction
): UserProfileState => {
  switch (action.type) {
    case AuthActionType.USER_DETAIL_REQUEST:
      return { ...state, loading: true, user: null, error: null };
    case AuthActionType.USER_DETAIL_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload,
        error: null,
      };
    case AuthActionType.USER_DETAIL_FAIL:
      return {
        ...state,
        loading: false,
        user: null,
        error: action.payload,
      };
    default:
      return { ...state };
  }
};

interface UserUpdateProfileState {
  loading: boolean;
  success: boolean;
  user: UserInformation | null;
  error: string | null;
}

const initalUserUpdateProfileState: UserUpdateProfileState = {
  loading: false,
  success: false,
  user: null,
  error: null,
};

export const userUpdateProfileReducer = (
  state: UserUpdateProfileState = initalUserUpdateProfileState,
  action: UserUpdateAction
): UserUpdateProfileState => {
  switch (action.type) {
    case AuthActionType.USER_UPDATE_REQUEST:
      return {
        ...state,
        loading: true,
        user: null,
        error: null,
        success: false,
      };
    case AuthActionType.USER_UPDATE_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        user: action.payload,
        error: null,
      };
    case AuthActionType.USER_UPDATE_FAIL:
      return {
        ...state,
        loading: false,
        success: true,
        user: null,
        error: action.payload,
      };
    case AuthActionType.USER_UPDATE_RESET:
      return initalUserUpdateProfileState;
    default:
      return { ...state };
  }
};
