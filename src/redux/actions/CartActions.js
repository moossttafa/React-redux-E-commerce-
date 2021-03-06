import {Types} from "../constants/types";
// import { toast } from "react-toastify"; 

export const addToCart = (items, product) => (dispatch) => {
  try {
    const cartItems = items.slice();
    let productAlreadyInCart = false;

    cartItems.forEach((cp) => {
      if (cp.id === product.id) {
        cp.count = (cp.count ?? 0) + 1;
        productAlreadyInCart = true;
      }
    });

    if (!productAlreadyInCart) {
      cartItems.push({ ...product, count: 1 });
    }
    dispatch({ type: Types.ADD_TO_CART, payload: { cartItems } });
    // toast.success("item added successfully", { autoClose: 2000 });
    // console.log("payload" ,payload );
  } catch (error) {
    console.log(error);
  }
};

// export const removeFromCart = (items, product) => (dispatch) => {
//   try {
//     const cartItems = items.slice().filter((a) => a.id !== product.id);
//     dispatch({ type: Types.REMOVE_CART, payload: { cartItems } });
//     // toast.success("item removed successfully", { autoClose: 2000 });
//   } catch (err) { 
//     console.log("Err: ", err);
//   }
// };

// export const removeAllProducts = () => {
//   try {
//     return (dispatch) => {
//       dispatch({
//         type: Types.REMOVE_ALL_PRODUCTS,
//       });
//       // toast.success("all items removed successfully", { autoClose: 2000 });
//     };
//   } catch (err) { 
//     console.log("Err: ", err);
//   }
// };