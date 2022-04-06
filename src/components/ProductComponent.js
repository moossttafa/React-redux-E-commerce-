import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchProducts } from '../redux/actions/productActions';
import "./products/style.css"

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();
   
  useEffect(() => {
   dispatch(fetchProducts())
  }, []);

  const renderList = products.map((products) => {
    const {id , title,image,price,category} = products;
    return(
       <div className='col-lg-3 col-md-4 col-sm-6'  key={id}>
        <Link to={`/product/${id}`}> 
            <div className='card'>
              <div className='image'>
                <img src={image} alt={title} />
              </div>
              <div className='content'>
                <div className='header'>{title}</div>
                <div className=' price'>{price}</div>
                <div className='category'>{category}</div>
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

export default ProductComponent