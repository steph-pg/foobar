import React from 'react'
import { RouterProvider, } from 'react-router-dom'
import router from './routerConfig'

function Router(): JSX.Element {
  return (
    <RouterProvider router={router} />
  )
}

export default Router
