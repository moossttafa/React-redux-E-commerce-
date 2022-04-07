import { combineReducers } from "redux";
import CartReducer from "./CartReducer";
import { productsReducer , selectedProductsReducer } from "./productsReducer";

export const RootReducers = combineReducers({
  allProducts : productsReducer, 
  Cart: CartReducer,
})