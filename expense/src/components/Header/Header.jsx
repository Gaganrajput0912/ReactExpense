// import React, { useContext, useState } from "react";

import { Link } from "react-router-dom";
// import CartContext from "../../store/CartContext";
const Header = () => {
  // const {  cartItems, setShow } = useContext(CartContext);
  return (
    <>
      <header className=" d-flex p-2 justify-content-around header ">
        <div className=" d-flex justify-content-between gap-4">
          <button className=" btn">
            <Link to="/" id="link">
              HOME
            </Link>
          </button>
          <button className=" btn">
            <Link to="/store" id="link">
              STORE
            </Link>
          </button>
          <button className=" btn text-white">
            <Link to="/about" id="link">
              ABOUT
            </Link>
          </button>
          <button className=" btn text-white">
            <Link to="/ContactUs" id="link">
              Contact Us
            </Link>
          </button>
            <button className=" btn">
              <Link to="/auth" id="link">
                LOGIN
              </Link>
          </button>
        </div>
        
      </header>
    
    </>
  );
};

export default Header