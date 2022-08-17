import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import Loader from '../Loader/Loader';
import './ExerciseVideos.css'

const ExerciseVideos = ({ exerciseVideos, name }) => {
    let isEmpty = !exerciseVideos.length || !exerciseVideos;
    if (isEmpty) {
        return (
            <Box>
                <Typography variant='h4' className='exe-video'>
                    Watch <span style={{ color: '#ff2625', textTransform: 'capitalize' }} >{name}</span> exercise videos
                </Typography>
                <Loader />
            </Box>)
    } else {
        return (
            <Box  >
                <Typography variant='h4' className='exe-video'>
                    Watch <span style={{ color: '#ff2625', textTransform: 'capitalize' }} >{name}</span> exercise videos
                </Typography>
                <Stack className='thumb-box' sx={{ flexDirection: { lg: 'row' }, gap: { lg: '3rem', xs: '1rem' } }}>
                    {exerciseVideos?.slice(0, 6).map((item, index) => {
                        return (
                            <Box>
                            <a key={index} className='exercise-videos' href={`https://www.youtube.com/watch?v=${item.video.videoId}`} target='_blank' rel='noreferrer' >
                                <img src={item.video.thumbnails[0].url} alt={item.video.title} className='thumbnail' />
                                <Box className='video-box'>
                                    <Typography variant='h5' color='#000' className='thumbnail' >
                                        {item.video.title}
                                    </Typography>
                                    <Typography variant='h6' color='#000'>
                                        {item.video.channelName}
                                    </Typography>
                                </Box>
                            </a>
                            </Box>
                        )
                    })}
                </Stack>
            </Box>
        )
    }
}
export default ExerciseVideos