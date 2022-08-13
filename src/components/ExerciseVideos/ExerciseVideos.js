import { Box, Stack, Typography } from '@mui/material'
import React from 'react'

const ExerciseVideos = ({exerciseVideos, name}) => {
    let isEmpty= !exerciseVideos.length || !exerciseVideos;
  if(isEmpty) return 'Loading...';
  return (
    <Box sx={{marginTop:{lg:'200px', xs:'20px'}}} p='20px' >
        <Typography variant='h4' mb='33px' >
            Watch <span style={{color:'#ff2625', textTransform:'capitalize'}} >{name}</span> exercise videos
        </Typography>
        <Stack justifyCcontent='flex-start' flexWrap='wrap' alignItem='center'
        sx={{flexDirection:{lg:'row'}, gap:{lg:'110px', xs:'0'}}} >
            {exerciseVideos?.slice(0,6).map((item,index)=>{
                return(
                    <a key={index} className='exercise-vides' href={`https://www.youtube.com/watch?v=${item.video.videoId}`} target='_blank' rel='boreferrer' >
                        <img src={item.video.thumbnails[0].url} alt={item.video.title} style={{width:'400px'}} />
                    </a>
                )
            })}
        </Stack>
    </Box>
  )
}

export default ExerciseVideos