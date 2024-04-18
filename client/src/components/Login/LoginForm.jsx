import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import LoginIcon from '../../assets/images/loginIcon.png'; // Import your login icon image
import '../App.css';
import Divider from '@mui/material/Divider';
import Checkbox from '@mui/material/Checkbox';
import FullWidthTextField from '../formItems/TextField';
import { FormControlLabel } from '@mui/material';
import PasswordInput from '../formItems/PasswordInput';
import Btn from '../formItems/Btn';
import { useNavigate } from 'react-router-dom';
import { login } from '../../helper/pocketBase';
import PrivacyAndPolicy from './PrivacyAndPolicy';


function LoginForm() {
  const [showPrivacy,setShowPrivacy]=useState(false)
    const [formValues, setFormValues] = useState({
        username: "",
        password: "",
      });
    const [errors, setErrors] = useState({});
    const navigate=useNavigate()
    const handleChange = (e,res) => {

        const { name, value, type, checked } = e.target;
    
        setFormValues((prevFormValues) => {
         if (type === 'checkbox') {
            return {
              ...prevFormValues,
              [name]: checked
                ? [...(prevFormValues[name] || []), value]
                : (prevFormValues[name] || []).filter((item) => item !== value),
            };
          } else {
    
            return {
              ...prevFormValues,
              [name]: value,
            };
           
          }
      
        });
      };
const handleSubmit=async(e)=>{
    e.preventDefault()

    const validationErrors = {};
    Object.entries(formValues).forEach(([key, value]) => {
      if (typeof value === 'string' && !value.trim()) {
  
        validationErrors[key] = `Please enter your ${key} `
      }
    });
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

     await login(formValues).then(()=>{
        navigate("/createCompany")
     }
     ).catch((err)=>{
        console.log(err);
     })

}
const handleSignUp=()=>{
    navigate('/register')
}
const handleFPassword=()=>{
navigate('/forgotPassword')
}
const handlePrivacy=()=>{
  // navigate('/privacyandpolicy')
  setShowPrivacy(true)
  
}
  return (
   
    <Box display="flex" flexDirection="column" alignItems="center" sx={{width:'100%'}}>
       <PrivacyAndPolicy open={showPrivacy} onClose={() => setShowPrivacy(false)} bg='blue'/>
       <Box sx={{width:'50%'}} alignItems="center" > 
       <Box display="flex" flexDirection="column" alignItems="center" >
       <img src={LoginIcon} alt="Login Icon" style={{ width: '3rem', height: '3rem' }} />
      <Typography variant="h5">
        <span className="wback">Welcome </span>
        <span className="back">Back!</span>
      </Typography>
      <span className="txt">Enter your leadpool credentials to login for the access</span>
       </Box>
      
      <form onSubmit={handleSubmit}>
        <Box sx={{ mt: 1 }}>
          <label className='labels' style={{ width: '100%', textAlign: 'left' }}>
            Username/Email
          </label>
          <FullWidthTextField handleChange={handleChange} name='username'  value={formValues.username} height='2.2rem' placeholder='Username/Email' icon='src\assets\images\email.png'/>
          {errors.username && (
              <Typography
                variant="caption"
                color="error"
                style={{ width: "100%", textAlign: "left"}} // Set a consistent width for the error message
              >
                {errors.username}
              </Typography> )}
        </Box>
        <Box sx={{ mt: 1 }}>
          <label className='labels' style={{ width: '100%', textAlign: 'left' }}>
            Password
          </label>
          <PasswordInput handleChange={handleChange} name='password'  value={formValues.password} id="outlined-adornment-password" label="Password" />
          {errors.password && (
              <Typography
                variant="caption"
                color="error"
                style={{ width: "100%", textAlign: "left"}} // Set a consistent width for the error message
              >
                {errors.password}
              </Typography> )}
        </Box>
        <Box sx={{ mt: 1 }}>
          <div className="fpassword link" style={{ width: '100%', textAlign: 'right' }} onClick={handleFPassword}>Forgot Password?</div>
        </Box>
        <FormControlLabel
          value="yes"
          control={<Checkbox sx={{ color: 'rgba(183, 182, 189, 1)' }}/>}
          label={
            <span className='labels' style={{ color: 'rgba(183, 182, 189, 1)',fontFamily:'poppins' }}>
              By login, you agree <span onClick={handlePrivacy} className='labels' style={{ color: 'rgba(0, 145, 255, 1)',fontFamily:'poppins' }}>Privacy Policy</span>
            </span>
          }
          labelPlacement="end"
        />
        <Box sx={{ mt: 1 }}><Btn submit title='Login' color='rgba(0, 145, 255, 1)'/></Box>
        <Box sx={{ mt: 2 ,mb:2, color:'rgba(183, 182, 189, 1)'}}>
        <Divider>or</Divider>
        <Box sx={{ mt: 2 }}><Btn imageSrc='src\assets\images\google.png' color='transparent' blacktext hcolor='rgba(183, 182, 189, 1)' title='Continue with google'/></Box>
        <Box sx={{ mt: 2 }}><Btn imageSrc='src\assets\images\apple.png' color='transparent' blacktext hcolor='rgba(183, 182, 189, 1)' title='Continue with apple' /></Box>
        </Box>
       
      </form>
       </Box><div >
       <span className='label' style={{ color: 'rgba(183, 182, 189, 1)',fontFamily:'poppins' }}>dont have an account? </span><span className='label link' style={{ color: 'rgba(0, 145, 255, 1)',fontFamily:'poppins' }} onClick={handleSignUp}>Sign UP</span>
       </div>
    </Box>
  );
}

export default LoginForm;
