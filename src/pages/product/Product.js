import React from 'react'
import ProductComponent from '../../components/ProductComponent';
import "./style.css"

const Product = () => {
  
  return (
  <div className="all-product">
    <div className="container">
      <div className='row'>
        <ProductComponent />
      </div>
    </div>
  </div> 
  )
}

export default Product