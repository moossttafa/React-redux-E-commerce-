import React, { useEffect, useRef, useState } from 'react'
import { Link , NavLink } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'
import {  links } from '../../data'
import "./Header.css" 

const Header = () => {
  // const {id, url, text} = links;
  const [showLinks , setShowLinks] = useState(false)
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

    useEffect(() => {
    // const linksHeight = linksRef.current.getBoundingClientRect().height;
    
    if (showLinks){
      linksContainerRef.current.style.height = `${200}px`;
    }else{
      linksContainerRef.current.style.height = '0px'
    }
  }, [showLinks]);

  return (  
    <nav>
    <div className="nav-center">
      <div className="nav-header"> 
        <NavLink to="/" className="logo">APPLE MART</NavLink>    
        <button className="nav-toggle" 
          onClick={() => setShowLinks(!showLinks)}>
          <FaBars />
        </button>
      </div>
       <div
         className="links-container" ref={linksContainerRef} >
          <ul className="links">
            {links.map((link) => { 
              return (
                <li key={link.id}>
                  <Link to={link.url} >{link.text}</Link>
                </li>
              )
            })}
          </ul>
          <NavLink to="/cart" className="btn btn-header ms-5">
              <span className="fa fa-shopping-cart me-1"></span> Cart
          </NavLink>
          </div> 
    </div>
  </nav>
  )
}

export default Header