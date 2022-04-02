import React, { Fragment } from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const FeaturedProducts = () => {
  const products = useSelector((state) => state.allProducts.products);
  const renderList = products.slice(0, 3).map((products) => {
    const {id , title,image,price,category} = products;
    return( <div className='four colum wide' key={id}>
        <Link to={`/product/${id}`}>
      <div className='ui link cards'>
        <div className='card'>
          <div className='image'>
            <img src={image} alt={title} />
          </div>
          <div className='content'>
            <div className='header'>{title}</div>
            <div className='meta price'>{price}</div>
            <div className='meta'>{category}</div>
          </div>
        </div>
      </div>
      </Link> 
    </div>
    )
  })
  return (
    <Fragment>
      { renderList}
      <Link to="/product"> All Product </Link>
    </Fragment>
  );
};

export default FeaturedProducts