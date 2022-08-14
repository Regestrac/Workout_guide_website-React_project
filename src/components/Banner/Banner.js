import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import BannerImage from '../../assets/images/banner.png'
import './Banner.css'

function Banner() {
  return (
    <Box sx={{mt:{lg:'212px', xs:'70px'},ml:{sm:'50px'}}} position='relative' p='20px'>
        <Typography color='#FF2625' fontWeight='600' fontSize="26px">
            Fitness Club
        </Typography>
        <Typography fontWeight='700' sx={{fontSize:{lg:'44px', xs:'40px'}}}>
            Sweat, Gain, Smile <br/> and Repeat
        </Typography>
        <Typography fontSize='22px' lineHeight='35px'>
            Checkout the most effective exercises
        </Typography>
        <Button variant="contained" color="error" href='#exercises' sx={{backgroundColor:'#FF2625', padding:'10px'}} >Explore Now</Button>
        <Typography className='bg-text'>
            <p>Exercise</p>
        </Typography>
        <img src={BannerImage} alt='Banner' className='banner-image'></img>
    </Box>
  )
}

export default Banner