import { Types } from "../constants/types";

const initialState = {
  products : [],
}

export const productsReducer = (state = initialState , action) => {
  switch (action.type) {
    case Types.FETCH_PRODUCTS:
      return {...state , products: action.payload };
    default: 
      return state;
  } 
};

export const selectedProductsReducer = (state = initialState , action) => {
  switch (action.type) {
    case Types.SELECTED_PRODUCT:
      return {...state , ...action.payload };
    default: 
      return state;
  } 
};