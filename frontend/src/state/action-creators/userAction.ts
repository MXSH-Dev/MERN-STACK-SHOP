import axios from "axios";
import { Dispatch } from "redux";
import UserInformation from "../../interfaces/userInfo";
import { AuthActionType } from "../action-types";
import {
  UserLoginAction,
  UserRegisterAction,
  UserDetailAction,
  UserUpdateAction,
} from "../actions";

export const login = (email: string, password: string) => async (
  dispatch: Dispatch<UserLoginAction>
) => {
  try {
    dispatch({ type: AuthActionType.USER_LOGIN_REQUEST });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(
      "/api/users/login",
      { email, password },
      config
    );

    dispatch({ type: AuthActionType.USER_LOGIN_SUCCESS, payload: data });

    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: AuthActionType.USER_LOGIN_FAIL,
      payload:
        error.message && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const logout = () => (dispatch: Dispatch<UserLoginAction>) => {
  localStorage.removeItem("userInfo");
  dispatch({ type: AuthActionType.USER_LOGOUT });
};

export const userRegister = (
  name: string,
  email: string,
  password: string
) => async (dispatch: Dispatch<UserRegisterAction | UserLoginAction>) => {
  try {
    dispatch({ type: AuthActionType.USER_REGISTER_REQUEST });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(
      "/api/users",
      { name, email, password },
      config
    );

    dispatch({ type: AuthActionType.USER_REGISTER_SUCCESS, payload: data });

    dispatch({ type: AuthActionType.USER_LOGIN_SUCCESS, payload: data });

    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: AuthActionType.USER_REGISTER_FAIL,
      payload:
        error.message && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getUserDetails = (id: string) => async (
  dispatch: Dispatch<UserDetailAction | UserLoginAction>,
  getState: any
) => {
  try {
    dispatch({ type: AuthActionType.USER_DETAIL_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    // const { data } = await axios.post(
    //   "/api/users",
    //   { name, email, password },
    //   config
    // );
    const { data } = await axios.get(`/api/users/${id}`, config);

    dispatch({ type: AuthActionType.USER_DETAIL_SUCCESS, payload: data });

    // dispatch({ type: AuthActionType.USER_LOGIN_SUCCESS, payload: data });

    // localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: AuthActionType.USER_DETAIL_FAIL,
      payload:
        error.message && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const updateUserProfile = (user: UserInformation) => async (
  dispatch: Dispatch<UserUpdateAction | UserLoginAction>,
  getState: any
) => {
  try {
    dispatch({ type: AuthActionType.USER_UPDATE_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const { data } = await axios.put(`/api/users/profile`, user, config);

    dispatch({ type: AuthActionType.USER_UPDATE_SUCCESS, payload: data });

    dispatch({
      type: AuthActionType.USER_LOGIN_SUCCESS,
      payload: { ...data, token: userInfo.token },
    });

    localStorage.setItem(
      "userInfo",
      JSON.stringify({ ...data, token: userInfo.token })
    );
  } catch (error) {
    dispatch({
      type: AuthActionType.USER_UPDATE_FAIL,
      payload:
        error.message && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
