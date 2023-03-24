import axios from "axios";
import React, { useContext, useState } from "react";
import {} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../context/AuthContext";

const Signup = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    email: "",
    password: "",
    confirmpassword: "",
  });
   const { setIsLogin } = useContext(AuthContext);


  const handleChange = (e) => {
    const { placeholder, value } = e.target;
    setUserData({ ...userData, [placeholder]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    localStorage.setItem("userEmail", userData.email);

    if (userData.confirmpassword != userData.password)
      return alert("Please check confirm password..");

    try {
      const res = await axios.post(
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDaeruYWdQeB2Q_dbNn0K8expO1LZKZEN0",
        {
          email: userData.email,
          password: userData.password,
          returnSecureToken: true,
        }
      );

        alert("User created successfully");
        setIsLogin(true)
    } catch (e) {;
        toast(e.response.data.error.message)
    }
    document.querySelector("form").reset();
  };

  return (
    <div>
      <h1 className="display-1 border-bottom p-2 border-3 border-dark">
        Sign Up
      </h1>
      <form
        onSubmit={handleSubmit}
        className="form m-auto my-5 w-25 p-3 shadow-lg rounded-3"
      >
        <div className=" form-floating mb-3">
          <input
            type="email"
            className="form-control"
            onChange={handleChange}
            placeholder="email"
            required
          />
          <label>Email address</label>
        </div>

        <div className=" form-floating mb-3">
          <input
            type="password"
            className="form-control"
            onChange={handleChange}
            placeholder="password"
            required
          />
          <label>Password</label>
        </div>

        <div className=" form-floating mb-3">
          <input
            type="password"
            className="form-control"
            onChange={handleChange}
            placeholder="confirmpassword"
            required
          />
          <label>Confirm Password</label>
        </div>

        <input
          type="submit"
          className=" btn btn-secondary"
          value="CREATE ACCOUNT"
        />
        <button className=" m-3 text-primary border-0" onClick={()=>setIsLogin(true)}>
          Already having account?
        </button>
      </form>
    </div>
  );
};

export default Signup;