import React from 'react';
import {BrowserRouter as Router , Switch , Route} from "react-router-dom"
import Header from './components/Navbar/Header';
import './App.css';
import ProductListing from './components/ProductListing';
import ProductDetails from './components/ProductDetails';
import About from './pages/about';
import Contact from './pages/contact';
import Home from './pages/home'; 

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
          <Route>404 Not Found!</Route>
        </Switch> 
      </Router>
    </div>
  );
}

export default App;
