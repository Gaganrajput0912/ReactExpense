import axios from 'axios'
import React, { useState } from 'react'

const VerifyEmail = () => {
    const [t,setT] = useState(true)
    const [text, setText] = useState(
      "Your Email is not verified. Please verified it."
    );
    const varifyEmailID = async () => {

        const res = await axios.post(
          "https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyDaeruYWdQeB2Q_dbNn0K8expO1LZKZEN0",
          {
            requestType: "VERIFY_EMAIL",
            idToken: localStorage.getItem("idToken"),
          } 
        );
        setText("Please check your mail. and confirm the mail.");
        setT(false)
    }

    return (
      <div className='m-5'>
            <p className='display-3'>{text}</p>
      {t&&  <button onClick={()=>varifyEmailID()} className=" btn btn-lg btn-secondary">Verify Email</button>
     } </div>
    );
}

export default VerifyEmail