import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import Logo from '../../assets/images/Logo.png'

const Footer = () => {
  return (
    <Box mt='5rem' bgcolor='#fff3f4'>
        <Stack gap='2.5rem' alignItems='center' px='2.5rem' pt='1.5rem' >
            <img src={Logo} alt='Logo' width='3rem' ></img>
            <Typography textAlign='center'>
                Made with ❤️ by Let's Workout<br/>
                <p style={{fontSize:'small', textAlign:'center', marginTop:'.5rem', marginBottom:'1rem'}}>Owner: Regestrac</p>
            </Typography>
        </Stack>
    </Box>
  )
}
export default Footer