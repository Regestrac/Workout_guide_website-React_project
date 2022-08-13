import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Details from '../../components/Details/Details'
import { exerciseOptions, fetchData } from '../../utils/fetchData'

function ExerciseDetails() {
    const [exerciseDetail,setExerciseDetail]=useState({})
    const {id} = useParams()
    useEffect(()=>{
        const fetchExerciseData = async ()=>{
            const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';
            const youtubeSearchUrl= 'https://youtube-search-and-download.p.rapidapi.com';

            const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, exerciseOptions)
            setExerciseDetail(exerciseDetailData)
        }
        fetchExerciseData()
    },[id])

  return (
    
    <Box>
        <Details exerciseDetail={exerciseDetail} />
    </Box>
  )
}

export default ExerciseDetails