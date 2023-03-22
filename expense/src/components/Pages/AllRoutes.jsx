import React from 'react'
import { Route, Routes } from 'react-router-dom'
// import Login from '../Auth/Login';
import Signup from '../Auth/Signup';
import Home from './Home'

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Signup />} />
    </Routes>
  );
}

export default AllRoutes