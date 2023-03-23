import axios from 'axios';
import React, { useState } from 'react'
import { toast } from 'react-toast';

const CompleteProfilePage = () => {

     const [userData, setUserData] = useState({
       fullName: "",
       url: "",
     });

    const handleChange = (e) => {
      const { placeholder, value } = e.target;
      setUserData({ ...userData, [placeholder]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(userData)
        let idToken = localStorage.getItem("idToken");
        try {
               const res = await axios.post(
          "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyDaeruYWdQeB2Q_dbNn0K8expO1LZKZEN0",
          {
            idToken: idToken,
            displayName: userData.fullName,
            photoUrl : userData.url
          }
        );
        toast('Profile Updated')
    document.querySelector("form").reset();
        } catch (e) {
              toast(e.response.data.error.message);
        }


    }

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="form m-auto my-5 w-25 p-3 shadow-lg rounded-3"
      >
        <div className=" form-floating mb-3">
          <input
            type="text"
            className="form-control"
            onChange={handleChange}
            placeholder="fullName"
            required
          />
          <label>Full Name</label>
        </div>

        <div className=" form-floating mb-3">
          <input
            type="url"
            className="form-control"
            onChange={handleChange}
            placeholder="url"
            required
          />
          <label>Profile Photo URL</label>
        </div>

        <input type="submit" className=" btn btn-secondary" value="UPDATE" />
      </form>
    </div>
  );
}

export default CompleteProfilePage