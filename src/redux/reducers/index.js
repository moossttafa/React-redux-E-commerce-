import { combineReducers } from "redux";
import { productReducer , selectedProductReducer } from "./productsReducer";

export const reducers = combineReducers({
  allProducts : productReducer,
  product : selectedProductReducer,
})