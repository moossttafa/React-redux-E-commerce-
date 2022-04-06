import React from 'react'
import { Link } from 'react-router-dom'
import ProductList from './ProductLists'

const FeaturedProducts = () => {
  return (
    <section className='featured-products'>
      <div className='title'>
        <h2>featured products</h2>
        <div className='underline'></div>
      </div>
      <div className="cardList">
        <div className="container">
          <div className='row'>
            <ProductList />
          </div>
        </div>
      </div>
      <Link to="/product" className="btn-product"> All Product </Link>
    </section>
  )
}

export default FeaturedProducts