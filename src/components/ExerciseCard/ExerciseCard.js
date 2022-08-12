import { Button, Stack, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

function ExerciseCard({exercises, key}) {
  console.log('exercise card')
  console.log(exercises)
  return (
    <Link to={`/exercise/${exercises.id}`} className='exercise-card' key={key}>
    <img src={exercises.gifUrl} alt={exercises.name} Loading='lazy' height='200px' width='200px' />
        <Stack>
          <Button sx={{ml:'21px', color:'#fff', background:'#fcc757', fontsize:'14px', borderRadius:'20px', textTransform:'capitalize'}}>
            {exercises.bodyPart}
          </Button>
          <Button sx={{ml:'21px', color:'#fff', background:'#ffa9a9', fontsize:'14px', borderRadius:'20px', textTransform:'capitalize'}}>
            {exercises.target}
          </Button>
        </Stack>
        <Typography ml='21px' color='#000' fontWeight='bold' mt='11px' pb='10px' textTransform='capitalize' fontSize='24px'>
          {exercises.name}
        </Typography>
    </Link>

  )
}

export default ExerciseCard