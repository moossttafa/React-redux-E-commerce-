import React, { Fragment } from 'react'  
import FeaturedProducts from '../../components/products/FeaturedProducts';
import Slider from '../../components/Slider';
// import Category from '../../components/Category/Category';
import "./style.css"  

const Home = () => { 
  return (
    <Fragment>  
      <Slider />
      <FeaturedProducts />  
      {
      // <Category />
      }
    </Fragment>
  )
}

export default Home