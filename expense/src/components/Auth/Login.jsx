import axios from 'axios';
import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
// import VerifyEmail from './VerifyEmail';
import { AuthContext } from '../../context/AuthContext';

const Login = () => {
  const navigate = useNavigate()
   const [userData, setUserData] = useState({
     email: "",
     password: "",
   });

   const {  setIdToken, setIsLogin ,setShow } = useContext(AuthContext);
  
  
   const handleChange = (e) => {
       const { placeholder, value } = e.target;
       setUserData({ ...userData, [placeholder]: value });
  };
     const handleSubmit = async (e) => {
       e.preventDefault();
       localStorage.setItem("userEmail", userData.email);

        try {
          const res = await axios.post(
            "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDaeruYWdQeB2Q_dbNn0K8expO1LZKZEN0",
            {
              email: userData.email,
              password: userData.password,
              returnSecureToken: true,
            }
          );

          localStorage.setItem("idToken", res.data.idToken);
          setIdToken(res.data.idToken)
          toast("User Login successfully");
          navigate("/VerifyEmail");
          
        } catch (e) {
          toast(e.response.data.error.message);
        }
        document.querySelector("form").reset();
      //  console.log(userData);
     };

  return (
    <div>
      <h1 className="display-1 border-bottom border-3 border-dark">Login</h1>
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

        <input type="submit" className=" btn btn-secondary" value="Login" />

        <button className=" m-3 text-primary border-0" onClick={() => setIsLogin(false)}>
          New User?
        </button>
        <button className=" m-3 text-primary border-0" onClick={()=>setShow(true)}>Forgot Password?</button>
      </form>
    </div>
  );
}

export default Login