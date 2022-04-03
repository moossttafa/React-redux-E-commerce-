import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchProducts } from '../redux/actions/productActions';

const FeaturedProducts = () => {
  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();

    useEffect(() => {
      dispatch(fetchProducts())
    }, []); 
    
  const renderList = products.slice(0, 3).map((products) => {

    const {id , title,image,price,category} = products;

    return( 
      <div className='four colum wide' key={id}>
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
    </Fragment>
  );
};

export default FeaturedProducts