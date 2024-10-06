import './navbar.css'
import  logo from '../assets/logo.png'
import { Link } from 'react-scroll'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '@mui/material';
export default function Navbar() {

  const token = sessionStorage.getItem("token")
  const email = sessionStorage.getItem('email')
  const [Token , setToken] = useState(null)

  useEffect(() => {
    setToken(token)
  }, [token])  

  const navigate  = useNavigate() ;

  
    return (
        <> 
         <div id="navBar">
                               <div >
                                   <img onClick={() => {navigate('/')}} id="logo" src={logo} alt='my logo'></img>
                               </div>

                               <div id='navButton'>
                                         <div className='navButtons'>
                                         <Link to="productSection" smooth={true} duration={1000}>
                                           Appointment
                                         </Link>
                                          
                                         </div> 
                                         <div className='navButtons'>
                                          <Link to='Features' smooth={true} duration={800}>
                                            Blood Donation
                                          </Link>
                                         </div>
                                         <div className='navButtons'>
                                          <Link to='contact' smooth={true} duration={1100}>
                                            Features
                                          </Link>   

                                         </div> 
                                         {token ? (
  <Button
    onClick={() => {
      sessionStorage.removeItem('token');
      navigate('/');
    }}
    variant="contained"
    sx={{
      backgroundColor: '#f15bb5',
      color: '#fff',
      borderRadius: '20px',
      '&:hover': {
        backgroundColor: '#e3649a',
      },
    }}
  >
    Logout
  </Button>
) : (
  <Button
    onClick={() => {
      navigate('/signup');
    }}
    variant="contained"
    sx={{
      backgroundColor: '#00bbf9',
      color: '#fff',
      borderRadius: '20px',
      '&:hover': {
        backgroundColor: '#009ac1',
      },
    }}
  >
    Sign Up
  </Button>
)}
                               </div>
                        </div>
        </>
    )
}