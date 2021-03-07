import axios from "axios";
import { Dispatch } from "redux";
import { CartActionType } from "../action-types/index";
import { CartAction } from "../actions/index";

export const addToCart = (id: string, qty: number) => async (
  dispatch: Dispatch<CartAction>,
  getState: any
) => {
  const { data } = await axios.get(`/api/products/${id}`);

  dispatch({
    type: CartActionType.CART_ADD_ITEM,
    payload: {
      product: data._id,
      name: data.name,
      image: data.image,
      price: data.price,
      countInStock: data.countInStock,
      qty: qty,
    },
  });

  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};
