import { Box, Button, Stack, Typography } from '@mui/material'
import React from 'react'
import BannerImage from '../../assets/images/banner.png'
import './Banner.css'

function Banner() {
    return (
        <Box className='banner-box' id='banner' sx={{ ml: { sm: '50px' } }}>
            <Stack className='banner-stack1'>
                <Typography color='#FF2625' fontWeight='600' fontSize="26px">
                    Let's Workout Club
                </Typography>
                <Typography fontWeight='700' sx={{ fontSize: { lg: '44px', xs: '40px' } }}>
                    Sweat, Gain, Smile <br /> and Repeat
                </Typography>
                <Typography fontSize='22px' lineHeight='35px'>
                    Checkout the most effective exercises
                </Typography>
                <Button variant="contained" href='#exercises' sx={{ backgroundColor: '#FF2625', padding: '10px' }} mt='1rem'>Explore Now</Button>
                <Typography className='bg-text'>
                    <p>Exercise</p>
                </Typography>
            </Stack>
            <Stack className='banner-stack2'>
                <img src={BannerImage} alt='Banner' className='banner-image'></img>
            </Stack>
        </Box>
    )
}

export default Banner