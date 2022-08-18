import { Box, Typography } from '@mui/material'
import React from 'react'
import HorizontalScrollbar from '../HorizontalScrollbar/HorizontalScrollbar'
import Loader from '../Loader/Loader'
import './SimilarExercises.css'

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => {
    return (
        <Box sx={{ mt: { lg: '6rem', xs: '1rem' }, p:'1rem' }}>
            <Typography variant='h4'>
                Exercises targeting same muscle group
            </Typography>
            <div className='target' >
                {targetMuscleExercises.length ? <HorizontalScrollbar data={targetMuscleExercises} /> : <Loader />}
            </div>
            <Typography variant='h4'>
                Exercises trageting same equipment
            </Typography>
            <div className='equipment' >
                {equipmentExercises.length ? <HorizontalScrollbar data={equipmentExercises} /> : <Loader />}
            </div>
        </Box>
    )
}
export default SimilarExercises