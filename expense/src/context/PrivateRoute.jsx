import React, { useContext, useState } from 'react'
import { Navigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { AuthContext } from './AuthContext'

const PrivateRoute = ({children}) => {
    const { IdToken } = useContext(AuthContext)
    if (IdToken)
        return children
    else {
        toast('Please Login first.')
        return <Navigate to='/auth' />

    }
}

export default PrivateRoute