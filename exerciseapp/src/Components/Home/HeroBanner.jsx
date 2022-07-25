import { Box, Typography, Button, Stack } from '@mui/material'
import React from 'react'
import HeroImage from '../../assets/images/banner.png'

const HeroBanner = () => {
  return (
    <Box
    sx={{
        mt: {lg: '212px', xs:'70px'},
        ml: {sm: '50px'}
    }}
    position='relative' p='20px' >

        

        <Typography fontWeight={600} fontSize={26} color='#FF2625'>
            Fitness Club
        </Typography>

        <Typography fontWeight={700} sx={{ fontSize:{ lg: '44px', sm: '40px'} }}>
            Sweat, Smile <br /> Repeat
        </Typography>

        <Typography mb={4} fontWeight={300} sx={{ fontSize:'22px', lineHeight:'35px'}}>
            Check out the most effective excersices.
        </Typography>

        <Button mt={4} variant='contained' color='error'>Explore Excercises</Button>

        
        <img src={HeroImage} className="hero-banner-img"/>
    </Box>
  )
}

export default HeroBanner