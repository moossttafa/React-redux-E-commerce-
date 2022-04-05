import axios from "axios"; 
import {Types} from "../constants/types";

export const fetchProducts = () => async (dispatch) => {
  try{
    const response = await axios
    .get(`https://fakestoreapi.com/products`)
    console.log("wwwwwwwwwww",response.data);
    dispatch ({
      type: Types.FETCH_PRODUCTS,
      payload: response.data,
    });
  } catch(err){
    console.log("Err: ", err);
  };
}; 

export const selectedProductActions = (id) => async (dispatch) => {
  try{
    const response = await axios
    .get(`https://fakestoreapi.com/products/${id}`);
    console.log("ssssssssssssss",response.data);
    dispatch ({
      type: Types.SELECTED_PRODUCT,
      payload: response.data,
    });
  } catch(err){
    console.log("Err: ", err);
  };
} 
  
export const removeSelectedProduct = () => {
  return {
    type: Types.REMOVE_SELECTED_PRODUCT,
  };
};