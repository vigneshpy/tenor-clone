import React from 'react';
import logoWhite from '../tenor-logo-white.svg'
import { styled,alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';


const Header=()=>{
    return (
        <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static"  color="primary">
        <Toolbar  >
            <Box ml={2} width={30}>
                <img src={logoWhite} width={80}  height={22}/>
            </Box>
            <Box ml={15}>

          </Box>
        </Toolbar>
      </AppBar>
    </Box>
    )
}

export default Header;