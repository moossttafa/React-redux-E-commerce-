import axios from "axios"; 
import {Types} from "../constants/types";

// Fetch data Products

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

// Fetch data Single Product

export const selectedProductActions = (id) => async (dispatch) => {
  try{
    const response = await axios
    .get(`https://fakestoreapi.com/products/${id}`); 
    dispatch ({
      type: Types.SELECTED_PRODUCT,
      payload: response.data,
    });
  } catch(err){
    console.log("Err: ", err);
  };
} 

// Fetch data Categories

export const getCategories = () => async (dispatch) => {
  try {
    const response = await axios.get(
      "https://fakestoreapi.com/products/categories"
      ); 
    dispatch({
      type: Types.FETCH_CATEGORIES,
      payload: response.data,
    });
  } catch (err) {
    console.log("Err: ", err);
  }
};

// Fetch data removeSelectedProduct

export const removeSelectedProduct = () => {
  return {
    type: Types.REMOVE_SELECTED_PRODUCT,
  };
};