import { Types } from "../constants/types";

const initialState = {
  products : [],
  product: {},
}

export const productsReducer = (state = initialState , action) => {
  switch (action.type) {
    case Types.FETCH_PRODUCTS:
      return { ...state ,
        products: action.payload 
      };
      case Types.SELECTED_PRODUCT:
      return { ...state ,
        product : action.payload 
      };
    default: 
      return state;
  } 
};

// export const selectedProductsReducer = (state = initialState , action) => {
//   switch (action.type) {
//     case Types.SELECTED_PRODUCT:
//       return {  ...state ,
//                 product : action.payload 
//             };
//     default: 
//       return state;
//   } 
// };