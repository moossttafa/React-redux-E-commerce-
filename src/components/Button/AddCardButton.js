import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/actions/CartActions";

const AddCardButton = ({productsData}) => {  
  // const products = useSelector((state) => state.allProducts.products);
  const cartItems = useSelector((state) => state.Cart.cartItems);
  // console.log("cardItem",cartItems);

  const dispatch = useDispatch(); 

    // const handelCart = (e) => {
    //   e.stopPropagation(); 
    //   console.log(products);
    // }
    console.log("1111",productsData);
  return (
    <button
      className="btn btn-header my-3" 
      onClick={(e) => {
        dispatch(addToCart(cartItems, productsData));
        e.stopPropagation();
      }} 
      > 
      Add To Cart
    </button>
  )
}

export default AddCardButton