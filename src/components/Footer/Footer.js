import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import Logo from '../../assets/images/Logo.png'

const Footer = () => {
  return (
    <Box mt='80px' bgcolor='#fff3f4'>
        <Stack gap='40px' alignItems='center' px='40px' pt='24px' >
            <img src={Logo} alt='Logo' width='50px' ></img>
            <Typography textAlign='center'>
                Made with ❤️ by Let's Workout<br/>
                <p style={{fontSize:'small', textAlign:'center', marginTop:'.5rem', marginBottom:'1rem'}}>Owner: Regestrac</p>
                Made especially for Ajay M V(Mass Veeran Rockey Prakash Annan)
            </Typography>
        </Stack>
    </Box>
  )
}
export default Footer