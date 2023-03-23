import React, { useContext, useState } from "react";

import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
// import CartContext from "../../store/CartContext";
const Header = () => {
  const { IdToken ,setIdToken } = useContext(AuthContext)
  console.log(IdToken)
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
              CONTACT US
            </Link>
          </button>
          <button className=" btn">
            {!IdToken ? <Link to="/auth" id="link">
                LOGIN
                </Link> : 
              <div onClick={() => {
                localStorage.removeItem("idToken");
                localStorage.removeItem("userEmail");
                setIdToken(null)
              }}>
                LOGOUT
              </div>
              }
          </button>
        </div>
        
      </header>
    
    </>
  );
};

export default Header