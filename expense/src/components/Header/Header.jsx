import React, { useContext, useState } from "react";

import { Link } from "react-router-dom";
import { themeActions } from "../../store/ThemeSlicer";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../store/AuthSlicer";
// import CartContext from "../../store/CartContext";
const Header = () => {
  
  const IdToken = useSelector((state) => state.auth.IdToken);
  const dispatch = useDispatch()
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
            <Link to="/expenses" id="link">
              EXPENSES
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
                dispatch(authActions.logout())
              }}>
                LOGOUT
              </div>
              }
          </button>
          <div style={{height : '25px'}} className="form-check mt-2 form-switch">
  <input onChange={()=>dispatch(themeActions.changeTheme())} className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
       <label className="text-white">Dark mode</label>
          </div>
        </div>
        
      </header>
    
    </>
  );
};

export default Header