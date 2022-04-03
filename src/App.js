import React from 'react';
import {BrowserRouter as Router , Switch , Route} from "react-router-dom"
import Header from './components/Navbar/Header';
import './App.css';
import ProductListing from './components/ProductListing';
import ProductDetails from './components/ProductDetails';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Home from './Pages/Home/Home';  
import Footer from "./components/Footer/Footer"
import NotFound from "./Pages/NotFound/NotFound"


function App() {
  return (
    <div className="App">
      <Router>
      <Header /> 
      <Switch> 
         <Route path="/" exact component={Home} /> 
          <Route path="/about" component={About} />
          <Route path="/product/:productId" component={ProductDetails} />
          <Route path="/product" component={ProductListing} />
          <Route path="/contact" component={Contact} />
          <Route path="*">
            <NotFound />
            </Route>
            </Switch>
          <Footer />
        </Router>  
    </div>
  );
}

export default App;
