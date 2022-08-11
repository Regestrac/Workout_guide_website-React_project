import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import BannerImage from '../../assets/images/banner.png'
import './Banner.css'

function Banner() {
  return (
    <Box>
        <Typography>
            Fitness Club
        </Typography>
        <Typography>
            Checkout the most effective exercises.
        </Typography>
        <Button variant="contained" color="error">Explore</Button>
        <Typography className='bg-text'>
            <p>Exercise</p>
        </Typography>
        <img src={BannerImage} alt='Banner' className='banner-image'></img>
    </Box>
  )
}

export default Banner