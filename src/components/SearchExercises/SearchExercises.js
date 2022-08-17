import { Box,Stack, Typography } from '@mui/material'
import React, { useState, useEffect } from 'react'
import { exerciseOptions, fetchData } from '../../utils/fetchData';
import HorizontalScrollbar from '../HorizontalScrollbar/HorizontalScrollbar';
import './SearchExercises.css'

const SearchExercises = ({setExercises,bodyPart,setBodyPart}) => {
    const [search,setSearch]= useState('')
    const [bodyParts, setBodyParts] = useState([])

    useEffect(()=>{
        const fetchExercisesData = async()=>{
            const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions)
        setBodyParts(['all', ...bodyPartsData])
        }
        fetchExercisesData();
    },[])
    
    const handleSearch= async()=>{
        if(search){
            const exerciseData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
            const SearchExercises = exerciseData.filter((exercise)=>
                exercise.name.toLowerCase().includes(search) || exercise.target.toLowerCase().includes(search) || 
                exercise.equipment.toLowerCase().includes(search) || exercise.bodyPart.toLowerCase().includes(search)
            );
            setSearch('');
            setExercises(SearchExercises);
        }
    }
  return (
    <Stack alignItems='center' mt='2rem' justifyContent='center' p='1.5rem'>
        <Typography fontWeight={700} sx={{fontSize:{lg:'2.5rem', xs:'1.8rem'}}} mb='3rem' textAlign='center'>
            Awesome Exercises You<br/>Should Know
        </Typography>
        <Box position='relative' mb='4rem' width='100%' className='text-box'>
            <input className='input' value={search} onChange={(e) => setSearch(e.target.value.toLowerCase())}
            placeholder='Search Exercises' type='text' />
            <button className='search-btn' 
                onClick={handleSearch} >
                    Search
            </button>
        
        </Box>
        <Box sx={{position:'relative', width:'100%', p:'1.3rem',}}>
            <HorizontalScrollbar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart} isBodyParts={true} />
        </Box>
    </Stack>
  )
}

export default SearchExercises