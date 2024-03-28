import { Avatar, Box, Container, IconButton, Typography,Stack, Grid, ImageList, ImageListItem, Button } from '@mui/material'
import React from 'react'
import ProfileIcon from '@mui/icons-material/Person'
import LoginRounded from '@mui/icons-material/LoginRounded'
import Add from '@mui/icons-material/Add'
import { Link } from 'react-router-dom';

const profileData = [{no:967,name:'Post'},{ no:323, name:'Followers'}, {no:982, name:'Following'}]
const itemData = [
    {
      img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
      title: 'Breakfast',
    },
    {
      img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
      title: 'Burger',
    },
    {
      img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
      title: 'Camera',
    },
    {
      img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
      title: 'Coffee',
    },
    {
      img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
      title: 'Hats',
    },
    {
      img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
      title: 'Honey',
    },
    {
      img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
      title: 'Basketball',
    },
    {
      img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
      title: 'Fern',
    },
    {
      img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
      title: 'Mushrooms',
    },
    {
      img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
      title: 'Tomato basil',
    },
    {
      img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
      title: 'Sea star',
    },
    {
      img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
      title: 'Bike',
    },
  ];
function Profile() {
    return (
        <>
            <Container maxWidth='sm' sx={{ marginTop: '100px' }}>
                <Typography component='p' variant='h4' textAlign='center' color='primary'>
                    Profile
                </Typography>
                <Box maxWidth='sm' textAlign='center' >
                <Button   variant="contained" component={Link} to="/CreateUser"  color='primary'  sx={{margin:'24px'}} endIcon={<Add/>}>
                New User</Button>
              <Button   variant="contained" color='secondary' component={Link} to="/Login" sx={{margin:'24px'}} endIcon={<LoginRounded/>}>
                Login</Button>
                  
                </Box>
                {false && 
                <Box>
                <Stack direction='row' alignItems='center' sx={{ width: '70%', margin: 'auto' ,padding:'30px'}}>
                    
                    <Avatar sx={{ backgroundColor: '#497174', width: '80px', height: '80px',margin:'10px'}} >
                        <ProfileIcon fontSize='large' />
                    </Avatar>
                    <Box sx={{padding:'20px'}}>
                        <Typography component='p' variant='h5' noWrap={true}>
                            User Name
                        </Typography>
                        <Typography component='p' variant='p'>
                            User ID
                        </Typography>
                    </Box>
                </Stack>
                <Stack direction='row' alignItems='center'justifyContent='space-around' spacing={2} sx={{backgroundColor:'#eff5f5',paddingBottom:'20px',borderRadius:'20px', margin: 'auto' }}>
                    {profileData.map((data) => {
                        return(  <Stack direction='column' alignItems='center'>
                                <IconButton color='primary'>
                                    <Typography sx={{padding:'20px',fontWeight:600}} color='primary'>
                                        {data.no}
                                    </Typography>
                                </IconButton>
                                <Typography  color='primary' sx={{fontWeight:300}}>
                                        {data.name}
                                </Typography>
                            </Stack>)
                    })}
                </Stack>
               <Box sx={{marginTop:'24px',marginBottom:'84px'}}>

                
                <ImageList sx={{ width:'100%', height:'auto' }} cols={3} >
                {itemData.map((item) => (
                    <ImageListItem key={item.img}>
                    <img
                        src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                        srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                        alt={item.title}
                        loading="lazy"
                    />
                    </ImageListItem>
                ))}
                </ImageList>
                </Box>
                </Box>}
            </Container>
        </>
    )
}

export default Profile