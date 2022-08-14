import { Box, Stack } from '@mui/material'
import React from 'react'
import {Link} from 'react-router-dom'
import Logo from '../../assets/images/Logo.png'
import './Navbar.css'

function Navbar() {
  return (
    <Stack className='navbar' direction='row'>
      <Box className='nav-logo'>
        <Link to='/'>
          <img src={Logo} alt="Logo" className='logo'></img>
        </Link>
      </Box >
      <Stack className='nav-items' direction='row'>
        <Link to='/' href='#home' className='stack-home'>Home</Link>
        <a href='#exercises' style={{ textDecoration: 'none', color: '#3a1212' }}>Exercises</a>
      </Stack>
    </Stack>
  )
}

export default Navbar