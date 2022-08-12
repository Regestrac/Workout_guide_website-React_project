import { Box, Button, Stack, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

function SearchExercises() {
    const [search,setSearch]= useState('')
    
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
                 >
                    Search
            </Button>
        </Box>
    </Stack>
  )
}

export default SearchExercises