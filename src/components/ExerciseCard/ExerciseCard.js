import { Button, Stack, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const ExerciseCard = ({ exercise }) => {
  return (
    <Link to={`/exercise/${exercise.id}`} className='exercise-card'>
      <Stack>
        <img src={exercise.gifUrl} alt={exercise.name} loading='lazy' height='250px' width='250px' />
        <Stack direction='row'>
          <Button sx={{ ml: '21px', color: '#fff', background: '#fcc757', fontsize: '14px', borderRadius: '20px', textTransform: 'capitalize' }}
            onClick={window.scrollTo({ top: 0, behaviour: 'smooth' })}>
            {exercise.bodyPart}
          </Button>
          <Button sx={{ ml: '21px', color: '#fff', background: '#ffa9a9', fontsize: '14px', borderRadius: '20px', textTransform: 'capitalize' }}
            onClick={window.scrollTo({ top: 0, behaviour: 'smooth' })}>
            {exercise.target}
          </Button>
        </Stack>
        <Typography ml='21px' color='#000' fontWeight='bold' mt='11px' pb='10px' textTransform='capitalize' fontSize='18px' maxWidth='250px' >
          {exercise.name}
        </Typography>
      </Stack>
    </Link>
  )
}
export default ExerciseCard