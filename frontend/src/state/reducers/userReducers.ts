import { userInfo } from "node:os";
import UserInformation from "../../interfaces/userInfo";
import { AuthActionType } from "../action-types";
import { UserLoginAction } from "../actions";

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
  state: any = initalUserLoginState,
  action: UserLoginAction
): UserLoginState => {
  switch (action.type) {
    case AuthActionType.USER_LOGIN_REQUEST:
      return { loading: true, userInfo: null, error: null };
    case AuthActionType.USER_LOGIN_SUCCESS:
      return { loading: false, userInfo: action.payload, error: null };
    case AuthActionType.USER_LOGIN_FAIL:
      return { loading: false, userInfo: null, error: action.payload };
    case AuthActionType.USER_LOGOUT:
      return initalUserLoginState;
    default:
      return initalUserLoginState;
  }
};
