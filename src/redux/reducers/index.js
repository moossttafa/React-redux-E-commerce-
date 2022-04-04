import { combineReducers } from "redux";
import { productsReducer , selectedProductsReducer } from "./productsReducer";

export const RootReducers = combineReducers({
  allProducts : productsReducer, 
})