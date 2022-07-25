import { Box } from '@mui/material'
import React from 'react'
import Excersices from './Excersices'
import HeroBanner from './HeroBanner'
import Search from './Search'


const Home = () => {
  return (
    <Box>
      <HeroBanner />
      <Excersices />
      <Search />
    </Box>
  )
}

export default Home