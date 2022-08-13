import { Button, Stack, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const ExerciseCard= ({exercise}) => {
  return (
    <Link to={`/exercise/${exercise.id}`} className='exercise-card'>
    <img src={exercise.gifUrl} alt={exercise.name} Loading='lazy' height='250px' width='250px' />
        <Stack direction='row'>
          <Button sx={{ml:'21px', color:'#fff', background:'#fcc757', fontsize:'14px', borderRadius:'20px', textTransform:'capitalize'}}>
            {exercise.bodyPart}
          </Button>
          <Button sx={{ml:'21px', color:'#fff', background:'#ffa9a9', fontsize:'14px', borderRadius:'20px', textTransform:'capitalize'}}>
            {exercise.target}
          </Button>
        </Stack>
        <Typography ml='21px' color='#000' fontWeight='bold' mt='11px' pb='10px' textTransform='capitalize' fontSize='18px' maxWidth='250px' >
          {exercise.name}
        </Typography>
    </Link>
  )
}
export default ExerciseCard