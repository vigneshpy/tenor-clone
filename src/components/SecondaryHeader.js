import React from 'react';
import logoWhite from '../tenor-logo-white.svg'
import SearchBar from './SearchBar'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';



const Header=()=>{
    return (
        <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static"  color="primary">
        <Toolbar  >
            <Box ml={2} width={30}>
                <img src={logoWhite} width={80}  height={22}/>
            </Box>
            <Box ml={15}>
                <SearchBar />
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
    )
}

export default Header;