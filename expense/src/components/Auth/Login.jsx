import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate()
   const [userData, setUserData] = useState({
     email: "",
     password: "",
   });
  //  const {setToken} = useContext(CartContext)

   const handleChange = (e) => {
     const { placeholder, value } = e.target;
     setUserData({ ...userData, [placeholder]: value });
   };
   const handleSubmit =  (e) => {
       e.preventDefault();

       localStorage.setItem('userEmail',userData.email)

 fetch(
   "https://identitytoolkit.googleapis.com/v1/accounts:signInWithCustomToken?key=AIzaSyDaeruYWdQeB2Q_dbNn0K8expO1LZKZEN0",
   {
     method: "POST",
     body: JSON.stringify({
       email: userData.email,
       password: userData.password,
       returnSecureToken: true,
     }),
     headers: {
       "Content-Type": "application/json",
     },
   }
 )
   .then((res) => {
     if (res.ok) {
       return res.json();
     } else {
       res.json().then((data) => {
         var errorMessage = "Authentication failed";
           if (data.error.message) alert(data.error.message)
           else alert(errorMessage)
         throw new Error(errorMessage);
       });
     }
   })
   .then((data) => {
       localStorage.setItem("token", data.idToken);
       navigate('/store')
   })
   .catch((err) => console.log(err.message));


     document.querySelector("form").reset();
   };

  return (
    <div>
      <h1 className="display-1 border-bottom border-3 border-dark">
        Login
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

        <input type="submit" className=" btn btn-secondary" value='Login' />
      </form>
    </div>
  );
}

export default Login