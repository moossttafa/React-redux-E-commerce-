import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchProducts } from '../../redux/actions/productActions';
import "./style.css";

const ProductList  = () => {
  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();

    useEffect(() => {
      dispatch(fetchProducts())
    }, []); 
    
  const renderList = products.slice(0, 4).map((products) => {
    const {id , title,image,price,category} = products;
    return(  
      <div className='col-lg-3 col-md-4 col-sm-6'  key={id}>
        <Link to={`/product/${id}`}>
          <div className='card'>
            <div className='image'>
              <img src={image} alt={title} />
            </div>
            <div className='content'>
              <h3 className='header'>{title}</h3>
              <span className='price'>{price}</span>
              <p className='category'>{category}</p>
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

export default ProductList 