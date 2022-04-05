import React, { Fragment } from 'react'
import { Carousel } from 'react-bootstrap';
import { banner } from "../../data";
import FeaturedProducts from '../../components/FeaturedProducts';
import "./style.css"
import { Link } from 'react-router-dom';
// import Footer from '../components/footer';

const Home = () => {
  
  return (
    <Fragment>  
      <Carousel>
        {banner && banner.map((banner) => { 
          return (
            <Carousel.Item key={banner.id}>
              <img 
                className="img-bg d-block w-100"
                src={banner.img} 
                alt={banner.title}
                />
            </Carousel.Item>  
            )
          })}  
      </Carousel>
      <section className='featured-products'> 
        <div className='title'>
          <h2>featured products</h2>
          <div className='underline'></div>
        </div>
        <div className='ui grid container'>
          <FeaturedProducts />
        </div>   
        <Link to="/product" className="btn-product"> All Product </Link>
      </section>
    </Fragment>
  )
}

export default Home