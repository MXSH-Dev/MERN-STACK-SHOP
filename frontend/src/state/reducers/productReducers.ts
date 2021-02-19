import {
  ProductListActionType,
  ProductDetailActionType,
} from "../action-types/index";
import { ProductListAction, ProductDetailAction } from "../actions/index";
import ProductDetail from "../../interfaces/ProductDetail";

interface ProductListState {
  loading: boolean;
  products: ProductDetail[];
  error: string | null;
}

const initialProductListState: ProductListState = {
  loading: false,
  products: [],
  error: null,
};

export const productListReducer = (
  state: ProductListState = initialProductListState,
  action: ProductListAction
): ProductListState => {
  switch (action.type) {
    case ProductListActionType.PRODUCT_LIST_REQUEST:
      return { loading: true, products: [], error: null };
    case ProductListActionType.PRODUCT_LIST_SUCCESS:
      return { loading: false, products: action.payload, error: null };
    case ProductListActionType.PRODUCT_LIST_ERROR:
      return { loading: false, products: [], error: action.payload };
    default:
      return state;
  }
};

interface ProductDetailState {
  loading: boolean;
  product: ProductDetail;
  error: string | null;
}

const initialProductDetailState: ProductDetailState = {
  loading: false,
  product: {} as ProductDetail,
  error: null,
};

export const productDetailReducer = (
  state: ProductDetailState = initialProductDetailState,
  action: ProductDetailAction
): ProductDetailState => {
  switch (action.type) {
    case ProductDetailActionType.PRODUCT_DETAIL_REQUEST:
      return { loading: true, product: {} as ProductDetail, error: null };
    case ProductDetailActionType.PRODUCT_DETAIL_SUCCESS:
      return { loading: false, product: action.payload, error: null };
    case ProductDetailActionType.PRODUCT_DETAIL_ERROR:
      return {
        loading: false,
        product: {} as ProductDetail,
        error: action.payload,
      };
    default:
      return state;
  }
};
