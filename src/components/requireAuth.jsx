import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom'

const RequireAuth = ({ children }) => {
  const currentUser = useSelector(state => state.user.currentUser)
  const location = useLocation()

  if (!currentUser) {
    return <Navigate to='/welcome' state={{ from: location }} replace />
  }

  return children
}

export default RequireAuth
