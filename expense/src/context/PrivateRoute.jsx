import React, { useContext, useState } from 'react'
import { Navigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useSelector } from 'react-redux'

const PrivateRoute = ({IdToken,children}) => {
    if (IdToken)
        return children
    else {
        alert('Please Login first.')
        return <Navigate to='/auth' />

    }
}

export default PrivateRoute