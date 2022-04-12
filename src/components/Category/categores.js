import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCategories } from '../../redux/actions/productActions';
import { Tabs ,Tab } from 'react-bootstrap'; 
import "./style.css"

const Categores = () => {
  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();

  const mens = products.filter((p) => p.category === "men's clothing");
  const womens = products.filter((p) => p.category === "women's clothing");
  const jeweleryes = products.filter((p) => p.category.includes("jewel"));
  const electronics = products.filter((p) => p.category.includes("elect"));

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  console.log("tabs",products);
  // const [key, setKey] = useState('home');
  return (
    <Fragment> 
      <div className='categores'>
      <div className='container'> 
      <Tabs
        defaultActiveKey="men"
        transition={false}
        // onSelect={(k) => setKey(k)}
        id="noanim-tab-example"
        className="mb-4"
        // activeKey={key}
      >
        <Tab eventKey="men" title="Mens&apos;Clothing">
          <div className='row'>
           {mens &&
              mens.map((men) => (
                <div className='col-md-3 col-sm-6'>
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
              </div>
            ))}
          </div>
        </Tab>
        <Tab eventKey="women" title="women&apos;s clothing">
          <div className='row'> 
          {womens &&
            womens.slice(0 , 4).map((women) => (
              <div className='col-md-3 col-sm-6'>
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
              </div>
            ))}
            </div>
        </Tab>
        <Tab eventKey="jewelery" title="jewelery">
         <div className='row'> 
          {jeweleryes &&
            jeweleryes.map((jewelery) => (
              <div className='col-md-3 col-sm-6'>
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
              </div>
            ))}
            </div>
        </Tab>
          <Tab eventKey="Electronics" title="Electronics">
            <div className='row'>
            {electronics &&
              electronics.slice(0 , 4).map((electronic) => (
                <div className='col-md-3 col-sm-6'>
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
              </div>
              ))}
              </div>
          </Tab> 
         </Tabs>
        </div> 
      </div>  
    </Fragment>
  )
}

export default Categores