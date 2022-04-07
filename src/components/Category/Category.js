import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCategories } from '../../redux/actions/productActions';
import "./style.css";

const Category = () => {

  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();

  const mens = products.filter((p) => p.category == "men's clothing");
  const womens = products.filter((p) => p.category == "women's clothing");
  const jeweleryes = products.filter((p) => p.category.includes("jewel"));
  const electronics = products.filter((p) => p.category.includes("elect"));

// const allCategories = ['all' , ...new Set(products.map((item) => item.category))];
// console.log(allCategories.mens);

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  console.log(mens,womens );

  return (
    <Fragment>  
      <ul> 
        <li>
          <button
            className=" nav-link bg-success text-white active"
            id="pills-mens-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-mens"
            type="button"
            role="tab"
            aria-controls="pills-mens"
            aria-selected="true"
          >
            Mens&apos;Clothing
        </button>
      </li>
      <li className="nav-item mb-3 ms-3" role="presentation">
        <button
          className=" nav-link bg-success text-white"
          id="pills-Womens-tab"
          data-bs-toggle="pill"
          data-bs-target="#pills-Womens"
          type="button"
          role="tab"
          aria-controls="pills-Womens"
          aria-selected="true"
        >
         women&apos;s clothing
        </button>
      </li>
      <li className="nav-item mb-3 ms-3" role="presentation">
      <button
        className="nav-link bg-success text-white"
        id="pills-jewelery-tab"
        data-bs-toggle="pill"
        data-bs-target="#pills-jewelery"
        type="button"
        role="tab"
        aria-controls="pills-jewelery"
        aria-selected="false"
      >
        jewelery
      </button>
    </li>
    <li className="nav-item mb-3 ms-3" role="presentation">
      <button
        className= "nav-link bg-success text-white"
        id="pills-electronics-tab"
        data-bs-toggle="pill"
        data-bs-target="#pills-electronics"
        type="button"
        role="tab"
        aria-controls="pills-electronics"
        aria-selected="false"
      >
        Electronics
      </button>
    </li>
    </ul> 
    <div className="tab-content container mt-5" id="pills-tabContent">
        <div
          className="tab-pane fade "
          id="pills-mens"
          role="tabpanel"
          aria-labelledby="pills-mens-tab"
        >
          <div
            className="imagesContainer d-flex justify-content-between"
          >
            {mens &&
              mens.map((men) => (
                <div key={men.image} 
                className="imgTabContainer"
                >
                  <img
                    src={men.image}
                    className="tabImg"
                    layout="fill"
                    alt="tabImg"
                  />
                </div>
              ))}
          </div>
        </div>

        <div
          className="tab-pane fade show active"
          id="pills-Womens"
          role="tabpanel"
          aria-labelledby="pills-Womens-tab"
        >
          <div
            className="imagesContainer d-flex justify-content-between"
          >
            {womens &&
              womens.map((women) => (
                <div key={women.image}
                 className="imgTabContainer"
                 >
                  <img
                    src={women.image}
                    className="tabImg"
                    layout="fill"
                    alt="tabImg"
                  />
                </div>
              ))}
          </div>
        </div>

        <div
          className="tab-pane fade"
          id="pills-jewelery"
          role="tabpanel"
          aria-labelledby="pills-jewelery-tab"
        >
          <div
            className="imagesContainer d-flex justify-content-between"
          >
            {jeweleryes &&
              jeweleryes.map((jewelery) => (
                <div key={jewelery.image} 
                className="imgTabContainer"
                >
                  <img
                    src={jewelery.image}
                    className="tabImg"
                    layout="fill"
                    alt="tabImg"
                  />
                </div>
              ))}
          </div>
        </div>

        <div
          className="tab-pane fade"
          id="pills-electronics"
          role="tabpanel"
          aria-labelledby="pills-electronics-tab"
        >
        <div
          className="imagesContainer d-flex justify-content-between"
        >
          {electronics &&
            electronics.map((electronic) => (
              <div key={electronic.image} 
                className="imgTabContainer"
                >
                <img
                  src={electronic.image}
                  className="tabImg"
                  layout="fill"
                  alt="tabImg"
                />
              </div>
            ))}
        </div>
      </div>
    </div> 
  </Fragment> 
  );
};

export default Category