import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import './ExerciseVideos.css'

const ExerciseVideos = ({ exerciseVideos, name }) => {
    let isEmpty = !exerciseVideos.length || !exerciseVideos;
    if (isEmpty) return <h1 style={{textAlign:'center'}}>Loading videos for you...!</h1>;
    return (
        <Box className='exe-video' >
            <Typography variant='h4' mb='33px' >
                Watch <span style={{ color: '#ff2625', textTransform: 'capitalize' }} >{name}</span> exercise videos
            </Typography>
            <Stack className='thumb-box' sx={{ flexDirection: { lg: 'row' }, gap: { lg: '80px', xs: '0' } }}>
                {exerciseVideos?.slice(0, 6).map((item, index) => {
                    return (
                        <a key={index} className='exercise-vides' href={`https://www.youtube.com/watch?v=${item.video.videoId}`} target='_blank' rel='noreferrer' >
                            <img src={item.video.thumbnails[0].url} alt={item.video.title} className='thumbnail' />
                            <Box >
                                <Typography variant='h5' color='#000' className='thumbnail'>
                                    {item.video.title}
                                </Typography>
                                <Typography variant='h6' color='#000'>
                                    {item.video.channelName}
                                </Typography>
                            </Box>
                        </a>
                    )
                })}
            </Stack>
        </Box>
    )
}
export default ExerciseVideos