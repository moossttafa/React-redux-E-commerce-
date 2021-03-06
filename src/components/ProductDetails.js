import React, { useEffect } from 'react'  
import { useDispatch, useSelector } from 'react-redux'; 
import { selectedProductActions } from '../redux/actions/productActions';
// import { useParams } from 'react-router-dom';

const ProductDetails = () => {

  // const { id } = useParams(); 
  const productId = window.location.pathname.replace("/", "").split("/")[1]; 

  // console.log( window.location);
  // console.log(window.location.pathname);
  // console.log(window.location.pathname.replace("/", ""));

  const product = useSelector((state) => state.allProducts.product); 

  const dispatch = useDispatch();  
  
  useEffect(() => {
    dispatch(selectedProductActions(productId))
  }, [dispatch , productId]);
  
  return (
    <div className="ui grid container">
      {Object.keys(product).length === 0 ? (
        <div>...Loading</div>
      ) : (
        <div className="ui segment">
          <div className="ui two column stackable center aligned grid">
            <div className="ui vertical divider">AND</div>
            <div className="middle aligned row">
              <div className="column lp">
                <img className="ui fluid image" src={product.image} alt={product.title} />
              </div>
              <div className="column rp">
                <h1>{product.title}</h1>
                <h2>
                  <p className="ui teal tag label">${product.price}</p>
                </h2>
                <h3 className="ui brown block header">{product.category}</h3>
                <p>{product.description}</p>
                <div className="ui vertical animated button" tabIndex="0">
                  <div className="hidden content">
                    <i className="shop icon"></i>
                  </div>
                  <div className="visible content">Add to Cart</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;