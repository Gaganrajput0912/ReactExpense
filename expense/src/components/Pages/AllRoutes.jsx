import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CompleteProfilePage from '../CompleteProfile/CompleteProfilePage';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import Login from '../Auth/Login';
import Signup from '../Auth/Signup';
import Home from './Home'

const AllRoutes = () => {
  const { isLogin } = useContext(AuthContext)
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/auth" element={isLogin ? <Login /> : <Signup />} />
      <Route path="/completeProfile" element={<CompleteProfilePage />} />
    </Routes>
  );
}

export default AllRoutes