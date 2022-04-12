import React, { Fragment } from 'react'  
import FeaturedProducts from '../../components/products/FeaturedProducts';
import Slider from '../../components/Slider';
import Categores from '../../components/Category/categores';
import "./style.css"  

const Home = () => { 
  return (
    <Fragment>  
      <Slider />
      <FeaturedProducts />   
      <Categores /> 
    </Fragment>
  )
}

export default Home