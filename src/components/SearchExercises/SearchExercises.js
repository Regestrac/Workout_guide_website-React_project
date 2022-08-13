import { Box, Button, Stack, TextField, Typography } from '@mui/material'
import React, { useState, useEffect } from 'react'
import { exerciseOptions, fetchData } from '../../utils/fetchData';
import HorizontalScrollbar from '../HorizontalScrollbar/HorizontalScrollbar';

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
                exercise.equipment.toLowerCase().includes(search) || exercise.bodyPart.toLowerCase().includes(search) );
            setSearch('');
            setExercises(SearchExercises);
        }
    }
  return (
    <Stack alignItems='center' mt='2rem' justifyContent='center' p='1.5rem'>
        <Typography fontWeight={700} sx={{fontSize:{lg:'44px', xs:'30px'}}} mb='3rem' textAlign='center'>
            Awesome Exercises You<br/>Should Know
        </Typography>
        <Box position='relative' mb='72px'>
            <TextField sx={{input:{fontWeight:'700', border:'none', borderRadius:'4px'},
                width:{lg:'1170px', xs:'350px'}, backgroundColor:'#fff', borderRadius:'40px'}}
                height='76px' value={search} onChange={(e) => setSearch(e.target.value.toLowerCase())} placeholder='Search Exercises' type='text' />
            <Button className='search-btn' sx={{bgcolor:'#ff2625', color:'#fff',
                width:{lg:'20px', xs:'14px'}, height:'56px', position:'absolute', right:'0'}}
                onClick={handleSearch} >
                    Search
            </Button>
        </Box>
        <Box sx={{position:'relative', width:'100%', p:'20px',}}>
            <HorizontalScrollbar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart} />
        </Box>
    </Stack>
  )
}

export default SearchExercises