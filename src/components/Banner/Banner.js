import { Box, Button, Stack, Typography } from '@mui/material'
import React from 'react'
import BannerImage from '../../assets/images/banner.png'
import './Banner.css'

function Banner() {
    return (
        <Box className='banner-box' id='banner' >
            <Stack className='banner-stack1'>
                <Typography color='#FF2625' fontWeight='600' fontSize="26px">
                    Let's Workout Club
                </Typography>
                <Typography fontWeight='700' fontSize='3rem'>
                    Sweat, Gain, Smile <br /> and Repeat
                </Typography>
                <Typography fontSize='22px' lineHeight='35px'>
                    Checkout the most effective exercises
                </Typography>
                <Button variant="contained" href='#exercises'>Explore Now</Button>
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