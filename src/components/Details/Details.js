import React from 'react'
import BodyPartImage from '../../assets/icons/body-part.png'
import TargetImage from '../../assets/icons/target.png'
import EquipmentImage from '../../assets/icons/equipment.png'
import { Button, Stack, Typography } from '@mui/material'

const Details = ({ exerciseDetail }) => {
    const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;
    const extraDetails = [
        { icon: BodyPartImage, name: bodyPart },
        { icon: TargetImage, name: target },
        { icon: EquipmentImage, name: equipment }
    ]

    return (
        <Stack gap='60px' sx={{ flexDirection: { lg: 'row' }, p: '20px', alignItems: 'center' }}>
            <img src={gifUrl} alt={name} loading='lazy' className='detail-image' height='700px' width='700px' />
            <Stack sx={{ gap: { lg: '35px', xs: '20px' } }}>
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
                        <Stack key={item.name} direction='row' gap='24px' alignItems='center' marginTop='1rem'>
                            <Button sx={{ background: '#fff2db', borderRadius: '50%', width: '100px', height: '100px' }} >
                                <img src={item.icon} alt={bodyPart} style={{ width: '50px', height: '50px' }} />
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