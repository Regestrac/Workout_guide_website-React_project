import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Details from '../../components/Details/Details'
import ExerciseVideos from '../../components/ExerciseVideos/ExerciseVideos'
import { exerciseOptions, fetchData, youtubeOptions } from '../../utils/fetchData'

function ExerciseDetails() {
    const [exerciseDetail,setExerciseDetail]=useState({})
    const {id} = useParams()
    const [exerciseVideos,setExerciseVideos]=useState([])
    useEffect(()=>{
        const fetchExerciseData = async ()=>{
            const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';
            const youtubeSearchUrl= 'https://youtube-search-and-download.p.rapidapi.com';
            const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, exerciseOptions)
            setExerciseDetail(exerciseDetailData);

            const exerciseVideosData = await fetchData(`${youtubeSearchUrl}/search?query=${exerciseDetailData.name}`, youtubeOptions)
            setExerciseVideos(exerciseVideosData.contents);
        }
        fetchExerciseData()
    },[id])

  return (
    
    <Box>
        <Details exerciseDetail={exerciseDetail} />
        <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name} />
    </Box>
  )
}

export default ExerciseDetails