import { Box, Button, Stack, Typography } from '@mui/material'
import React from 'react'
import BannerImage from '../../assets/images/banner.png'
import './Banner.css'

function Banner() {
    return (
        <Box className='banner-box' id='banner' >
            <Stack className='banner-stack1'>
                <Typography className='type1'>
                    <p>Let's Workout Club</p>
                </Typography>
                <Typography className='type2' fontWeight='700' fontSize='3rem'>
                    <p>Sweat, Gain, Smile <br /> and Repeat</p>
                </Typography>
                <Typography className='type3' fontSize='22px' lineHeight='35px'>
                    <p>Checkout the most effective exercises</p>
                </Typography>
                <Button variant="contained" href='#exercises' className='exp-btn'  style={{marginLeft:'7rem'}}><p>Explore Now</p></Button>
                <Typography className='bg-text'>
                    <p>WORKOUT</p>
                </Typography>
            </Stack>
            <Stack className='banner-stack2'>
                <img src={BannerImage} alt='Banner' className='banner-image'></img>
            </Stack>
        </Box>
    )
}

export default Banner