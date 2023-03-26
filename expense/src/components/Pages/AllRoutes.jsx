import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CompleteProfilePage from '../CompleteProfile/CompleteProfilePage';
import PrivateRoute from '../../context/PrivateRoute';

import Expenses from '../Expenses/Expenses';
import { useContext } from 'react';
import VerifyEmail from '../Auth/VerifyEmail';
import { useSelector } from 'react-redux';
import Login from '../Auth/Login';
import Signup from '../Auth/Signup';
import Home from './Home'

const AllRoutes = () => {
  const isLoginPage = useSelector((state) => state.auth.isLoginPage);
  const IdToken = useSelector(state=>state.auth.IdToken)
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/auth" element={isLoginPage ? <Login /> : <Signup />} />
      <Route path="/completeProfile" element={<CompleteProfilePage />} />
      <Route path="/VerifyEmail" element={<VerifyEmail />} />
      <Route
        path="/expenses"
        element={
          <PrivateRoute IdToken={IdToken}>
            <Expenses />
          </PrivateRoute>
        }
      />
    </Routes>

    
  );
}

export default AllRoutes