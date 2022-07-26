import React from 'react'
import {Stack} from '@mui/material'
import Logo from '../assets/images/Logo.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <Stack direction='row' justifyContent='space-around' 
      sx={{ gap:{sm: '122px', xs:'40px'}, mt:{ sm:'32px', xs:'20px'}, justifyContent:'none' }}>
      <Link to='/'>
      <img src={Logo} alt="Logo" sx={{ width:"48px", height:"48px" }}/>
      </Link>

      <Stack direction='row' gap='40px' fontSize='24px' alignItems='flex-end' >
      <Link to='/' style={{ textDecoration:'none', color: '#3A1212', borderBottom: '3px solid #FF2625' }}>Home</Link>
      <a href="#excersice" style={{ textDecoration:'none', color: '#3A1212' }}>Excersice</a>
      </Stack>

</Stack>
  )
}

export default Navbar