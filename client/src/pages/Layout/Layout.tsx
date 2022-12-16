import { Outlet } from 'react-router-dom'
import { Box, Toolbar } from '@mui/material'
import { Drawer } from './Drawer'
import { Header } from './Header'

export default function Layout() {
  return (
    <Box sx={{ display: 'flex' }}>
      <Header />
      <Drawer />
      <Box component="main">
        <Toolbar />
        <Outlet />
      </Box>      
    </Box>
  )
}
