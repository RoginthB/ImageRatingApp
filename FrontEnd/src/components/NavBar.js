import React from 'react'
import BottomNavigation from '@mui/material/BottomNavigation';
import { BottomNavigationAction, IconButton,  Toolbar ,AppBar,Container } from '@mui/material';
import HomeIcon from '@mui/icons-material/HomeOutlined'
import AddCircle from '@mui/icons-material/AddCircleOutline'
import Profile from '@mui/icons-material/AccountCircleOutlined'
import MenuIcon from '@mui/icons-material/Menu'
import TextLogo from '../images/logo1.svg'
import { Link } from 'react-router-dom';
export function BottomNavBar() {
    return (
        <div>          
                <BottomNavigation showLabels  sx={{ backgroundColor: '#497174',marginTop: '24px', position:'fixed',bottom:0,left:0,right:0}} >
                    <BottomNavigationAction component={Link} to="/" label='Home' sx={{  color: "#CFFFAC" }}icon={<HomeIcon color='secondary' />} />
                    <BottomNavigationAction component={Link} to="/Post"  label='Post'sx={{   color: "#CFFFAC" }}icon={<AddCircle color='secondary' />} />
                    <BottomNavigationAction component={Link} to="/Profile" label='Profile'sx={{   color: "#CFFFAC"  }}icon={<Profile color='secondary'  />} />
                </BottomNavigation>
          
        </div>
    )
}
export function NavBar() {
    return (
        <div>
                <AppBar >
                    <Container maxWidth='lg'>
                    <Toolbar variant='dense'>
                        <IconButton edge='center' aria-label='Menu'>
                            <MenuIcon fontSize='large' sx={{ color: '#fff', "& :hover": { color: "#CFFFAC" } }} />
                        </IconButton>
                        <img src={TextLogo} style={{ width: '180px', margin: 'auto' }} />
                        <IconButton edge='center' aria-label='Profile' >
                            <Profile fontSize='large' sx={{ color: '#fff', "& :hover": { color: "#CFFFAC" } }} />
                        </IconButton>  
                    </Toolbar>
                    </Container>
                </AppBar>
          
        </div>
    )
}


