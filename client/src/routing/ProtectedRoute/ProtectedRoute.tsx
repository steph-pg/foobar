import React from 'react'
import { Navigate, Outlet, To } from 'react-router-dom'

interface ProtectedRouteProps {
  to?: To
  from?: To
}

export default function ProtectedRoute({ to = '/login' }: ProtectedRouteProps): JSX.Element {
  const auth = true
  return auth ? <Outlet /> : <Navigate to={to} /> 
}
