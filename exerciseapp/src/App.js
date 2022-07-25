import { Box } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import ExcersiceDetails from './Components/ExcersiceDetails/ExcersiceDetails';
import Footer from './Components/Footer';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar';

function App() {
  return (
   <Box  width="400px" sx={{ width: {xl: '1488px'} }}> 
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/Excersice/:id' element={<ExcersiceDetails />}/>
    </Routes>
    <Footer />
   </Box>
  );
}

export default App;
