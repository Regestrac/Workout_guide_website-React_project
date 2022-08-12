import { Box } from '@mui/material'
import React, { useState } from 'react'
import Banner from '../components/Banner/Banner'
import SearchExercises from '../components/SearchExercises/SearchExercises'

function Home() {
  const [bodyPart,setBodyPart] = useState('all')
  const [exercises, setExercises] = useState([])
  return (
    <Box>
      <Banner/>
      <SearchExercises setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart}/>
    </Box>
  )
}

export default Home