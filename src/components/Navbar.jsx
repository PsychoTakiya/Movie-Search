import React from 'react'
import {AppBar, Toolbar, Typography} from '@mui/material';

function Navbar() {
  return (
    <div>
      <AppBar  position='sticky' sx={{backgroundColor:'#212121'}}>
        <Toolbar sx={{justifyContent:'center'}}>
          <Typography variant="h4">
            MovieDex
          </Typography>
        </Toolbar>
      </AppBar>
        
    </div>
  )
}

export default Navbar