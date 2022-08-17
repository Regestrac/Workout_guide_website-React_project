import { Stack } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import './ExerciseCard.css'

const ExerciseCard = ({ exercise }) => {
  return (
    <Link to={`/exercise/${exercise.id}`} className='exercise-card'>
      <Stack>
        <img src={exercise.gifUrl} alt={exercise.name} loading='lazy' className='exe-img' />
        <Stack direction='row' justifyContent='center'>
          <div className='btn1' >
            {exercise.bodyPart}
          </div>
          <div className='btn2' >
            {exercise.target}
          </div>
        </Stack>
        <p className='name' > {exercise.name}</p>
      </Stack>
    </Link>
  )
}
export default ExerciseCard