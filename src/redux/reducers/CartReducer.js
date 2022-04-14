import { Types } from "../constants/types";

const initialState = {
  cartItems: [],
};
const CartReducer = (state = initialState, action) => {
  switch (action.types){
    case Types.ADD_TO_CART:
      console.log(state ,"state");
      return { 
        ...state.cartItems,
         cartItems: [...state.cartItems , action.payload.cartItems] 
        }; 
    default: 
      return state;
  } 
}
export default CartReducer; 