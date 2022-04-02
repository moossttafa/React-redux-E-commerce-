import React, { Fragment } from 'react'
import { Carousel } from 'react-bootstrap';
import { banner } from "../data";
import FeaturedProducts from '../components/FeaturedProducts';
// import Footer from '../components/footer';

const Home = () => {
  
  return (
    <Fragment>  
      <Carousel>
        {banner && banner.map((banner) => { 
          return (
            <Carousel.Item key={banner.id}>
              <img 
                className="d-block w-100"
                src={banner.img} 
                alt={banner.title}
                />
            </Carousel.Item>  
            )
          })}  
      </Carousel>
      <div className='ui grid container'>
        <FeaturedProducts />
      </div>   
    </Fragment>
  )
}

export default Home