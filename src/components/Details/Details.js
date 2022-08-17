import React from 'react'
import BodyPartImage from '../../assets/icons/body-part.png'
import TargetImage from '../../assets/icons/target.png'
import EquipmentImage from '../../assets/icons/equipment.png'
import { Button, Stack, Typography } from '@mui/material'
import './Details.css'

const Details = ({ exerciseDetail }) => {
    const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;
    const extraDetails = [
        { icon: BodyPartImage, name: bodyPart },
        { icon: TargetImage, name: target },
        { icon: EquipmentImage, name: equipment }
    ]

    return (
        <Stack className='details' sx={{flexDirection:{lg:'row'}, p:'1.4rem', alignItems:'center'}}>
            <img src={gifUrl} alt={name} loading='lazy' className='detail-image'/>
            <Stack sx={{ gap: { lg: '2rem', xs: '1.3rem' } }}>
                <Typography variant='h3' >
                    {name}
                </Typography>
                <Typography variant='h6'>
                    Exercises keep you strong.<br />
                    {name} is one of the best exercise to target your {target}.<br />
                    It will help you to improve your mood and gain energy.
                </Typography>
                {extraDetails.map((item) => {
                    return (
                        <Stack key={item.name} className='extra-detail'>
                            <Button  sx={{ background: '#fff2db', borderRadius: '50%', width: '6rem', height: '6rem' }}>
                                <img src={item.icon} alt={bodyPart} className='detail-img' />
                            </Button>
                            <Typography textTransform='capitalize' variant='h5'>
                                {item.name}
                            </Typography>
                        </Stack>
                    )
                })}
            </Stack>
        </Stack>
    )
}

export default Details