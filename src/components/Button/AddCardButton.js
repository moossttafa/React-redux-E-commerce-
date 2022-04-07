import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/actions/CartActions";

const AddCardButton = ({products}) => { 
  // const products = useSelector((state) => state.allProducts.products);
  const cartItems = useSelector((state) => state.Cart?.cartItems);
  const dispatch = useDispatch(); 
  console.log("sad",products);
  return (
    <button
      className="btn btn-header my-3" 
      onClick={(e) => {
        dispatch(addToCart(cartItems, products));
        e.stopPropagation(); }}>
      Add To Cart
    </button>
  )
}

export default AddCardButton