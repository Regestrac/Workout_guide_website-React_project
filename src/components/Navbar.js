import { Stack } from '@mui/material'
import React from 'react'
import {Link} from 'react-router-dom'
import Logo from '../assets/images/Logo.png'
import './Navbar.css'

function Navbar() {
  return (
    <Stack direction='row' justifyContent='space-around' sx={{gap:{sm:'122px', xs:'40px'}, mt:{sm:'2rem', xs:'1.2rem'},justifyContent:'none'}} px='1rem'>
      <Link to='/'>
      <img src={Logo} alt="Logo" className='logo' style={{width:'3rem', height:'3rem', margin:'0 1rem'}}></img>
      </Link>
      <Stack direction='row' gap='3rem' fontSize='1.5rem' alignItems='flex-end' >
        <Link to='/' className='stack-home'>Home</Link>
        <a href='exercises' style={{textDecoration:'none', color:'#3a1212'}}>Exercises</a>
      </Stack>
    </Stack>
  )
}

export default Navbar