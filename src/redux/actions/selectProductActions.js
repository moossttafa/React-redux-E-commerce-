import axios from "axios";
import {Types} from "../constants/types"; 

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