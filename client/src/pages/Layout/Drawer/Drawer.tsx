import React from 'react'
import { Drawer as MuiDrawer, SxProps, Toolbar } from '@mui/material'

const drawerStyle: SxProps = {
  width: 200,
  flexShrink: 0,
  [`& .MuiDrawer-paper`]: {
    width: 200,
    boxSizing: 'border-box'
  },
}

export default function Drawer(): JSX.Element {
  return (
    <MuiDrawer variant="permanent" data-testid="drawer" sx={drawerStyle}>
      <Toolbar />
      Drawer
    </MuiDrawer>
  )
}
