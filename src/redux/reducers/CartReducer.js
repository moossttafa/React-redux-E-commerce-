import { Types } from "../constants/types";

const initialState = {
  cartItems: [],
};
const CartReducer = (state = initialState, action) => {
  switch (action.types){
    case Types.ADD_CART:
      return { ...state.cartItems, cartItems: action.payload.cartItems };
    default:
      return state;
  }
}
export default CartReducer; 