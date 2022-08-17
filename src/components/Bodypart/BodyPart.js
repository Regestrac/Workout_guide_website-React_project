import { Stack, Typography } from '@mui/material'
// import React,{useState, useEffect} from 'react'
import Icon from '../../assets/icons/gymBlue.png'
import './BodyPart.css'

function BodyPart({item, setBodyPart, bodyPart}) {
  return (
    <Stack type='button' className='bodyPart-cards' sx={{ borderTop: bodyPart === item ? '4px solid #ff1212' : '',borderBottomLeftRadius:'1.4rem',}} 
        onClick={()=>{
          setBodyPart(item);
            window.scrollTo({top:1800, left:100, behaviour:'smooth'})
        }}>
                
        <img src={Icon} alt='Dumbell' className='bodypart-icon' />
        <Typography className='body-part'>{item}</Typography>
    </Stack>
  )
}
export default BodyPart