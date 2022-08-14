import { Box } from '@mui/material'
import React, { useState } from 'react'
import Banner from '../../components/Banner/Banner'
import SearchExercises from '../../components/SearchExercises/SearchExercises'
import Exercises from '../../components/Exercises/Exercises'
import './Home.css'

function Home() {
  const [bodyPart,setBodyPart] = useState('all')
  const [exercises, setExercises] = useState([])
  return (
    <Box>
      <Banner />
      <SearchExercises setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart} />
      <Exercises exercises={exercises} setExercises={setExercises} bodyPart={bodyPart} />
    </Box>
  )
}

export default Home