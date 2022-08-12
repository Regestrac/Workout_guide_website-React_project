import { Stack, Typography } from '@mui/material'
import React,{useState, useEffect} from 'react'
import Icon from '../../assets/icons/gymBlue.png'

function BodyPart({item, setBodyPart, bodyPart}) {
  return (
    <Stack type='button' alignItems='center' justifyContent='center' className='bodyPart-cards'
        sx={{ borderTop: bodyPart === item ? '4px solid #ff1212' : '',
            background:'#fff', borderBottomLeftRadius:'20px',
            width:'270px', height:'280px',curser:'pointer',gap:'47px'}} 
        onClick={()=>{
          setBodyPart(item);
            window.scrollTo({top:1800, left:100, behaviour:'smooth'})
        }}>
                
        <img src={Icon} alt='Dumbell' style={{width:'40px', height:'40px'}} />
        <Typography fontSize='24px' fontWeight='bold' color='#3A1212' textTransform='capitalize'>{item}</Typography>
    </Stack>
  )
}

export default BodyPart