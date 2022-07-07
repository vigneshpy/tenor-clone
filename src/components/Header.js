import React from 'react';
import logo from '../logo.svg'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

const Header=()=>{
    return (
        <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static"  color="transparent">
        <Toolbar variant="dense"  >
            <Box ml={15} width={30}>
                <img src={logo} width={80} />
            </Box>
        </Toolbar>
      </AppBar>
    </Box>
    )
}

export default Header;