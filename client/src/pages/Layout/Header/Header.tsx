import React from 'react'
import { AppBar, Toolbar, Typography } from '@mui/material'

export default function Header() {
  return (
    <AppBar data-testid="header" position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
      <Toolbar>
        <Typography>Header</Typography>
      </Toolbar>
    </AppBar>
  )
}
