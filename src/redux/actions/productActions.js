import axios from "axios"; 
import {Types} from "../constants/types";

export const fetchProducts = () => async (dispatch) => {
  try{
    const response = await axios
    .get(`https://fakestoreapi.com/products`)
    console.log(response.data);
    dispatch ({
      type: Types.FETCH_PRODUCTS,
      payload: response.data,
    });
  } catch(err){
    console.log("Err: ", err);
  };
};

// export const setProducts = (products) => {
//   return{
//     type : Types.SET_PRODUCTS,
//     payload : products,
//   };
// };

export const selectedProduct = (product) => {
  return {
    type: Types.SELECTED_PRODUCT,
    payload: product,
  };
};

export const removeSelectedProduct = () => {
  return {
    type: Types.REMOVE_SELECTED_PRODUCT,
  };
};