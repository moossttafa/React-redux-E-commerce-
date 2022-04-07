import React, { Fragment, useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchProducts } from '../redux/actions/productActions';
import AddCardButton from './Button/AddCardButton';
// import ReactPaginate from 'react-paginate';

import "./products/style.css"

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();

  // const filteredProducts = useSelector(
  //   (state) => state.Products?.filteredItems
  // );
  
  // const [pageNumber, setPageNumber] = useState(0);
  // const productsPerPage = 4;
  // const pagesVisited = pageNumber * productsPerPage;
  // const pageCount = Math.ceil(filteredProducts.length / productsPerPage);

  //  const changePage = ({ selected }) => {
  //   setPageNumber(selected);
  // };
   
  useEffect(() => {
   dispatch(fetchProducts())
  }, []);

    return (
      <Fragment> 
        <div className='row'> 
        {products.map((products ,id) =>  
          <div className='col-lg-3 col-md-4 col-sm-6'  key={id}>
          <div className='card'>
              <Link to={`/product/${id}`}> 
                <div className='image'>
                  <img src={products.image} alt={products.title} />
                </div>
              </Link> 
              <div className='content'>
                <div className='header'>{products.title}</div>
                <div className=' price'>{products.price}</div>
                <div className='category'>{products.category}</div>
                <AddCardButton />
              </div>
            </div> 
          </div>
          )} 
          </div>
        <ReactPaginate
          breakLabel="..."
          nextLabel="next >" 
          pageCount={5} 
          marginPagesDisplayed={3}
          containerClassName={"pagination justify-content-center my-4"}
          pageClassName={"page-item"}
          pageLinkClassName={"page-link"}
          previousClassName={"page-link"}
          nextClassName={"page-item"}
          nextLinkClassName={"page-link"}
          activeClassName={"active"}
          previousLabel="< previous" 
          // onPageChange={changePage}
    />
    </Fragment>
  );
  }
export default ProductComponent