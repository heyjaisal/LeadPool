import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import LoginIcon from '../../assets/images/loginIcon.png'; // Import your login icon image
import '../App.css';
import FullWidthTextField from '../formItems/TextField';
import Btn from '../formItems/Btn';
import CustomizedDialogs from './SendLink';
import { useNavigate } from 'react-router-dom';
function ForgotPassword() {
    const navigate=useNavigate()
    const [sendLink,setSendLink]=useState(false)
    const handleSubmit=(e)=>{
        e.preventDefault()
        setSendLink(true)
    }
    const handleLogin=()=>{
        navigate('/')
    }
  return (
    <div>
        <CustomizedDialogs open={sendLink} onClose={() => setSendLink(false)} icon='src\assets\images\sendLink.png' text='Password reset link has been sent Successfully' />
       <Box sx={{mt:4}} display="flex" flexDirection="column" alignItems="center" >
       <Box display="flex" flexDirection="column" alignItems="center" sx={{width:'70%'}} >
       <img src={LoginIcon} alt="Login Icon" style={{ width: '3rem', height: '3rem' }} />
      <Typography variant="h5">
        <span className="wback">Forgot </span>
        <span className="back">Password</span>
      </Typography>
      <span className="txtp">Enter your email below, and we'll send you a verification email to your inbox.</span>
      </Box>
      
      <label className='labels' style={{ width: '100%', textAlign: 'left', marginTop:'1rem'}}>
            Email
          </label>
          <form style={{width:'100%'}} onSubmit={handleSubmit}>
      <FullWidthTextField placeHolder='Email' height='3rem'/>

        <Box sx={{ mt: 2,width:'100%' }}><Btn submit title='Send Link' color='rgba(0, 145, 255, 1)'/></Box>
        </form>
        <p>
       <span className='label' style={{ color: 'rgba(183, 182, 189, 1)',fontFamily:'poppins' }}>Remembered your password? </span><span className='label link' style={{ color: 'rgba(0, 145, 255, 1)',fontFamily:'poppins' }} onClick={handleLogin}>Login</span>
       </p>
       </Box>
    </div>
  )
}

export default ForgotPassword