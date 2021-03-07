import CartItem from "../../interfaces/CartItem";
import { CartActionType } from "../action-types/index";
import { CartAction } from "../actions";

interface CartState {
  cartItems: CartItem[];
}

const initialCartState: CartState = {
  cartItems: [] as CartItem[],
};
export const cartReducer = (
  state = initialCartState,
  action: CartAction
): CartState => {
  switch (action.type) {
    case CartActionType.CART_ADD_ITEM:
      const item = action.payload;
      const existItem = state.cartItems?.find(
        (i) => i.product === item.product
      );
      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((i) =>
            i.product === existItem.product ? item : i
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state?.cartItems, item],
        };
      }
    default:
      return state;
  }
};
